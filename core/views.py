from django.shortcuts import render
from .models import UserDetails, Skill, Project
from django.views.decorators.cache import never_cache


@never_cache
def home(request):
    user = UserDetails.objects.first()
    skills = Skill.objects.all()
    projects = Project.objects.all()
    

    context = {
    'user': user,
    'skills': skills,
    'projects': projects,
    'total_skills': sum(
        len((s.language + ' ' + s.backend + ' ' + s.frontend + ' ' +
             s.database + ' ' + s.apis + ' ' + s.others).split())
        for s in skills
    ),
}
    return render(request, 'index.html', context)