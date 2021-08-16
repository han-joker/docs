# 初见 Docker

docker run --name http2-nginx -v d:/apps/http2-nginx/etc:/etc/nginx -v d:/apps/http2-nginx/html:/usr/share/nginx/html -p 443:443 -p 80:80 -d nginx 
