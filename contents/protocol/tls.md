# TLS

## ALPN
ALPN，Application Layer Protocol Negotiation 是 TLS 的扩展协议，用于应用层协议的协商。
chrome 浏览器和 curl 是支持 ALPN 的，在发起HTTPS请求时通过ALPN发起请求的协议为h2, http/1.1。为了支持HTTP2的升级和兼容ALPN的才诞生的

> HTTP/2 之前的 SPDY 协议是基于 SSL/TLS 的，谷歌开发了 NPN（下一代协议协商，Next Protocol Negotiation）的 SSL/TLS 扩展，用于在客户端连接服务器时协商是否采用 HTTP/2 协议。SPDY 协议是由 Web 服务器所实现支持的，而 NPN 则是由 OpenSSL 等 SSL 实现支持的。