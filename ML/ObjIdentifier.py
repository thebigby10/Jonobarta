import torch
import requests
from io import BytesIO
import torch.nn as nn
from scipy.spatial.distance import cosine
from PIL import Image
from torchvision import models, transforms
from torchvision.models import ResNet50_Weights
from facenet_pytorch import MTCNN, InceptionResnetV1
class ImageParser:
    def __init__(self):
        self.image_url= None
        self.image= None

    def imageFetcher(self,image_URL):
        try:
            self.image_url= image_URL
            response= requests.get(self.image_url)
            response.raise_for_status()
            self.image= Image.open(BytesIO(response.content))
        except requests.exceptions.RequestException as e:
            print(f"Error fetching Image: {e}")
        except Exception as e:
            print(f"Error Opening Image: {e}")

        return self.image

class ObjIdentifier:
    def __init__(self):
        weights = ResNet50_Weights.DEFAULT
        self.resnet = models.resnet50(weights=weights)
        self.resnet = nn.Sequential(*list(self.resnet.children())[:-1])
        self.resnet.eval()
        preprocess = weights.transforms()
        self.preprocess = preprocess
        self.imageParser= ImageParser()
    def vector_generator(self, image_URL):
        try:
            image = self.imageParser.imageFetcher(image_URL)
            img_tensor = self.preprocess(image).unsqueeze(0)
            with torch.no_grad():
                feature= self.resnet(img_tensor)
            return feature.flatten().numpy()
        except Exception as e:
            print(f"Error generating vector: {e}")

    def Similarity_factor(self, vector1, vector2):
            return 1 - cosine(vector1, vector2)

class PersonIdentifier:
    def __init__(self, threshold=0.6):
        self.device= torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
        self.mtcnn= MTCNN(keep_all=True, device=self.device)
        self.model= InceptionResnetV1(pretrained='vggface2').eval().to(self.device)
        self.threshold= threshold
        self.imageParser= ImageParser()
    def embedding_generator(self,image_url):
        image= self.imageParser.imageFetcher(image_url)
        faces, _ = self.mtcnn(image, return_prob=True)
        if faces is not None and len(faces)>0:
            embeddings= self.model(faces.to(self.device))
            embedding= embeddings[0].detach().cpu().numpy()
            return embedding
        else:
            return None
    def is_Same(self, image1_URL, image2_URL):
        vector1= self.embedding_generator(image1_URL)
        vector2= self.embedding_generator(image2_URL)
        if vector1 is not None and vector2 is not None:
            distance= cosine(vector1,vector2)
            return distance> self.threshold
        else:
            print("No face detected")
            return False




