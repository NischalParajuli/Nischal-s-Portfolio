from django.db import models

class UserDetails(models.Model):
    username = models.CharField(max_length=50, blank=False)
    bio = models.TextField()                       
    email = models.EmailField(unique=True)            
    linkedin = models.URLField(blank=True)        
    instagram = models.URLField(blank=True)          
    github = models.URLField(blank=True)              
    image = models.ImageField(upload_to="profile/")

    # Bachelors
    college_name = models.CharField(max_length=100)
    college_location = models.CharField(max_length=100)
    degree = models.CharField(max_length=150)
    bachelors_year = models.CharField(max_length=50) 

    # Class 12
    school_name = models.CharField(max_length=100)
    school_location = models.CharField(max_length=100)
    school_year = models.CharField(max_length=50)   

    def __str__(self):
        return self.username


class Skill(models.Model):                     
    language = models.CharField(max_length=100, blank=True)
    backend = models.CharField(max_length=100, blank=True)
    frontend = models.CharField(max_length=100, blank=True)
    database = models.CharField(max_length=100, blank=True)
    apis = models.CharField(max_length=100, blank=True)
    others = models.CharField(max_length=100, blank=True)      

    def __str__(self):
        return self.language                        


class Project(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to="projects/", blank=True)
    project_details = models.TextField(blank=False, null=True)
    github_repo = models.URLField()
    live_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name                           