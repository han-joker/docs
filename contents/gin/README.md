# 介绍

Gin 官网上如下介绍该产品：

> Gin is a web framework written in Golang.
>
> It features a Martini-like API, but with performance up to 40 times faster than Martini.
>
> If you need performance and productivity, you will love Gin.
>

也就是：

> Gin 是由 GoLang 开发的 Web 框架。
>
> 它提供类似 Martini 的 API，但性能上比 Martini 快40倍。若对性能和生产力有需求，你会喜欢上 Gin 的。

这里提到的 Martini 是一款早期的 Go Web 框架。也就是 Gin 参考了 Martini 的风格，但在性能上做了狠狠的优化！关于 Martini ，最后一次更新是 22 Jan 2017，好久了！

Gin 提供 HTTP 服务，以及封装了 Web 服务中请求和响应的处理，例如提供了路由，请求数据绑定，请求数据验证，响应编码等核心功能。但 Gin 本身未封装数据库操作等非 Web 相关功能，通常需要使用其他模块来实现。例如操作 RDB（关系型数据库）就可以使用 GORM 模块（一款由 Go 开发的全功能 ORM 模块）。因此相对来说，Gin 本身是很轻量的。

## Homepage

[https://gin-gonic.com/](https://gin-gonic.com/)

