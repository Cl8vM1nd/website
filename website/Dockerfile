FROM ubuntu:16.04

LABEL maintainer="cl8vm1nd<cl8vm1nd@gmail.com>"

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
COPY . /var/www/website
COPY kube/nginx/website /etc/nginx/sites-enabled/website

# Expose ports
EXPOSE 80

# Set the default command to execute
# when creating a new container
CMD ["nginx", "-g", "daemon off;"]
