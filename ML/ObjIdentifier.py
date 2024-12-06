import torch
import requests
from io import BytesIO
import torch.nn as nn
from scipy.spatial.distance import cosine
from PIL import Image
from torchvision import models, transforms
from torchvision.models import ResNet50_Weights
class ImageParser:
    def __init__(self,image_url):
        self.image_url= image_url
        self.image= None

    def imageFetcher(self):
        try:
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











