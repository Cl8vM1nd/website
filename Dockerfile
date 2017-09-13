FROM ubuntu:16.04

# File Author / Maintainer
MAINTAINER clevmind@yandex.ru

RUN apt-get -y update && apt-get install -y

# Install necessary tools
RUN apt-get install -y wget vim dialog net-tools software-properties-common

# CertBot
RUN add-apt-repository -y ppa:certbot/certbot
RUN apt-get update && apt-get install -y python-certbot-nginx

#NGINX
RUN apt-get install -y nginx

# Create website folder
RUN mkdir -p /var/www/website

# Copy website files
COPY website/ /var/www/website
COPY dev/nginx/website /etc/nginx/sites-enabled/website

RUN certbot --nginx

# Expose ports
EXPOSE 80

# Set the default command to execute
# when creating a new container
CMD ["nginx", "-g", "daemon off;"]
