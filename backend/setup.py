import io
import os
import re

from setuptools import find_packages
from setuptools import setup


def read(filename):
    filename = os.path.join(os.path.dirname(__file__), filename)
    text_type = type(u"")
    with io.open(filename, mode="r", encoding='utf-8') as fd:
        f = r':[a-z]+:`~?(.*?)`'
        return re.sub(text_type(f), text_type(r'``\1``'), fd.read())


setup(
    name="datanative-faas-backend",
    version="0.1.0",
    url="https://github.com/datanative/homepage/backend",
    license='MIT',
    author="Frank Winkler",
    author_email="",
    description="The backend for the public example webpage project for datanative.cloud",
    long_description=read("README.md"),
    packages=find_packages(exclude=('tests',)),
    install_requires=[],
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python :: 3.8',
    ],
)
