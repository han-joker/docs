# Web Server

## 搭建 HTTP/2 服务器

Nginx 需要 `http_v2_module` 和 `http_ssl_module` 的支持，需要 Nginx >= 1.9.5。

编译安装需要：

```
configure --with-http_ssl_module --with-http_v2_module
```

 

