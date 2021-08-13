# mkcert

Github：[https://github.com/FiloSottile/mkcert](https://github.com/FiloSottile/mkcert)。

## 初见

mkcert 是用于创建本地信任证书的简单工具。它是免配的。

我们在开发环境使用 HTTPS ，SSL 时，证书的处理总是很麻烦。mkcert 这个小工具可以帮我们快速的生成用于本地测试的证书和密钥。非常方便。

mkcert 是 Google 的一位密码学工程师，使用 Go 编写的。

## 快速使用

安装好 mkcert 后，仅需两步，即可得到 SSL 证书。

1. 安装本地 CA，` mkcert -install`
2. 生成站点证书，`mkcert example.com "*.example.com" example.test localhost 127.0.0.1 ::1`

操作如下：

```sh
$ mkcert -install
Created a new local CA 💥
The local CA is now installed in the system trust store! ⚡️
The local CA is now installed in the Firefox trust store (requires browser restart)! 🦊

$ mkcert example.com "*.example.com" example.test localhost 127.0.0.1 ::1

Created a new certificate valid for the following names 📜
 - "example.com"
 - "*.example.com"
 - "example.test"
 - "localhost"
 - "127.0.0.1"
 - "::1"

The certificate is at "./example.com+5.pem" and the key at "./example.com+5-key.pem" ✅
```

以上示例来自于 [https://github.com/FiloSottile/mkcert](https://github.com/FiloSottile/mkcert)。

生成的证书文件在 `./` 下，一个证书文件和一个密钥文件。

当然这有个前提是先安装好 mkcert 命令。

## 安装 mkcert

推荐的安装方案如下，详细的安装方案，请参考 [FiloSottile/mkcert](https://github.com/FiloSottile/mkcert#installation)。

### Linux

- 首先安装 `certutil`
- 然后安装 mkcert，建议下载预编译好的二进制程序

首先安装 `certutil`

```sh
sudo apt install libnss3-tools
    -or-
sudo yum install nss-tools
    -or-
sudo pacman -S nss
    -or-
sudo zypper install mozilla-nss-tools
```

[二进制程序下载位置](https://github.com/FiloSottile/mkcert)，选择合适的版。例如：

```shell
sudo wget https://github.com/FiloSottile/mkcert/releases/download/v1.4.3/mkcert-v1.4.3-linux-amd64
```

下载后，通常需要改名或、放在 $PATH 路径中，并赋予可执行权限。例如：

```sh
sudo chmod u+x mkcert-v1.4.3-linux-amd64
sudo mv mkcert-v1.4.3-linux-amd64 /usr/bin/mkcert
```

至此，mkcert 安装完毕，可以快速获取本地 CA 和证书了，参考快速使用即可。

### Windows

推荐使用预编译的二进制程序，[二进制程序下载位置](https://github.com/FiloSottile/mkcert)。执行时，若权限不足，请使用管理员来运行。

### macOS

推荐使用 [Homebrew](https://brew.sh/)

```
brew install mkcert
brew install nss # if you use Firefox
```

## 使用证书

有了证书后，就可以使用该证书和 CA 了。

例如：[使用 Nginx 搭建 HTTPS 服务器](#)。

