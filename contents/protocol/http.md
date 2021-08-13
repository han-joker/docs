# HTTP

## 初见 HTTP

> 超文本传输协议（英语：HyperText Transfer Protocol，缩写：HTTP）是一种用于分布式、协作式和超媒体信息系统的应用层协议。/HTTP是万维网的数据通信的基础。
>
> 设计HTTP最初的目的是为了提供一种发布和接收 HTML 页面的方法。通过 HTTP 或者 HTTPS 协议请求的资源由统一资源标识符（Uniform Resource Identifiers，URI）来标识。
>
> HTTP 的发展是由蒂姆·伯纳斯-李于1989年在欧洲核子研究组织（CERN）所发起。HTTP 的标准制定由万维网协会（World Wide Web Consortium，W3C）和互联网工程任务组（Internet Engineering Task Force，IETF）进行协调，最终发布了一系列的 RFC，其中最著名的是1999年6月公布的 RFC 2616，定义了HTTP协议中现今广泛使用的一个版本——HTTP1.1。
>
> 2014年12月，互联网工程任务组（IETF）的 Hypertext Transfer Protocol Bis（httpbis）工作小组将 HTTP/2 标准提议递交至IESG进行讨论，于2015年2月17日被批准。HTTP/2标准于2015年5月以 RFC 7540 正式发表，取代 HTTP/1.1 成为HTTP的实现标准。

以上是维基百科中文站中对 HTTP 的介绍。

## 发展 timeline

- HTTP/3，**After a long time**
  - Google 的 QUIC（快速 UDP 互联网连接）实验性网络
- [HTTP/2](https://httpwg.org/specs/rfc7540.html)，**2015年**
  - 二进制传输协议
  - TCP 连接复用，多工通讯（Multiplexing）
  - 传输数据流（stream）控制
  - 头信息压缩（header compression），引入头信息表避免重复发送重复头信息，HPACK 算法。
  - 服务器推送（server push）
- SPDY，**2009年**
  - Google 推出的标准，谷歌于2009年公开了 SPDY 协议，W3C 将 SPDY 协议引入到 HTTP 协议中，就是之后的 HTTP/2
- [HTTP/1.1](https://httpwg.org/specs/rfc7230.html)，**1999年**
  - TCP 长连接
  - 管道机制
  - 内容分块传输 `Transfer-Encoding: chunked`
  - 增加 PUT、DELETE、OPTIONS、PATCH 请求方式
  - 增加 Host 头信息
- HTTP/1.0，**1996年**
  - 增加 GET、POST、HEAD 请求方式
  - 可响应任何内容
  - 增加了请求响应头信息。
  - 支持状态码（status code）、多字符集支持、多部分发送（multi-part type）、权限（authorization）、缓存（cache）、内容编码（content encoding）等。
  - 不支持 TCP 长连接
- HTTP/0.9，**1991年**
  - 仅支持 GET 请求
  - 仅可响应 HTML 内容
  - TCP 连接立即关闭
  - 默认80端口