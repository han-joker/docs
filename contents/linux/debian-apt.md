# APT

## 更换国内源

### 以阿里云源为例，快捷展示

```sh
sudo mv /etc/apt/sources.list /etc/apt/sources.list.v0
sudo echo "" > /etc/apt/sources.list
sudo echo "deb http://mirrors.aliyun.com/debian/ buster main non-free contrib" >> /etc/apt/sources.list
sudo echo "deb http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib" >> /etc/apt/sources.list
sudo echo "deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib" >> /etc/apt/sources.list
sudo echo "deb http://mirrors.aliyun.com/debian-security buster/updates main" >> /etc/apt/sources.list
sudo echo "deb-src http://mirrors.aliyun.com/debian/ buster main non-free contrib" >> /etc/apt/sources.list
sudo echo "deb-src http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib" >> /etc/apt/sources.list
sudo echo "deb-src http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib" >> /etc/apt/sources.list
sudo echo "deb-src http://mirrors.aliyun.com/debian-security buster/updates main" >> /etc/apt/sources.list
sudo apt update
```

至此，就可以比较快速在国内安装软件了。可以继续执行 `sudo apt upgrade` 来更新已有应用。

### 具体步骤说明

#### 备份原有的配置

```sh
mv /etc/apt/sources.list /etc/apt/sources.list.v0
```

#### 配置国内源

**任意选择如下源之一**，将内容拷贝到配置文件 `/etc/apt/sources.list` 文件中：

```sh
sudo vi /etc/apt/sources.list
```

##### 中科大源

```sh
# 中科大源
deb http://mirrors.ustc.edu.cn/debian buster main contrib non-free
deb http://mirrors.ustc.edu.cn/debian buster-updates main contrib non-free
deb http://mirrors.ustc.edu.cn/debian buster-backports main contrib non-free
deb http://mirrors.ustc.edu.cn/debian-security/ buster/updates main contrib non-free

deb-src http://mirrors.ustc.edu.cn/debian buster main contrib non-free
deb-src http://mirrors.ustc.edu.cn/debian buster-updates main contrib non-free
deb-src http://mirrors.ustc.edu.cn/debian buster-backports main contrib non-free
deb-src http://mirrors.ustc.edu.cn/debian-security/ buster/updates main contrib non-free
```

##### 阿里云源

```sh
# 阿里云源
deb http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
deb http://mirrors.aliyun.com/debian-security buster/updates main

deb-src http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
deb-src http://mirrors.aliyun.com/debian-security buster/updates main
```

##### 网易源

```sh
# 网易源
deb http://mirrors.163.com/debian/ buster main non-free contrib
deb http://mirrors.163.com/debian/ buster-updates main non-free contrib
deb http://mirrors.163.com/debian/ buster-backports main non-free contrib
deb http://mirrors.163.com/debian-security/ buster/updates main non-free contrib

deb-src http://mirrors.163.com/debian/ buster main non-free contrib
deb-src http://mirrors.163.com/debian/ buster-updates main non-free contrib
deb-src http://mirrors.163.com/debian/ buster-backports main non-free contrib
deb-src http://mirrors.163.com/debian-security/ buster/updates main non-free contrib
```

##### 官方源

```sh
# 官方源
deb http://deb.debian.org/debian buster main contrib non-free
deb http://deb.debian.org/debian buster-updates main contrib non-free
deb http://deb.debian.org/debian-security/ buster/updates main contrib non-free

deb-src http://deb.debian.org/debian buster main contrib non-free
deb-src http://deb.debian.org/debian buster-updates main contrib non-free
deb-src http://deb.debian.org/debian-security/ buster/updates main contrib non-free
```

#### 更新配置

```sh
sudo apt update	
```

#### 更新应用

```sh
sudo apt upgrade
```

## 安装

## 移除

## 更新

## 检索
