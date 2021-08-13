# APT源

Debian 更换国内源

备份原有的配置

```sh
mv /etc/apt/sources.list /etc/apt/sources.list.v0
```

任意选择如下源即可：

阿里源

```sh
echo "" > /etc/apt/sources.list
echo "deb http://mirrors.aliyun.com/debian/ buster main non-free contrib" >> /etc/apt/sources.list
echo "deb http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib" >> /etc/apt/sources.list
echo "deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib" >> /etc/apt/sources.list
echo "deb http://mirrors.aliyun.com/debian-security buster/updates main" >> /etc/apt/sources.list

echo "deb-src http://mirrors.aliyun.com/debian/ buster main non-free contrib" >> /etc/apt/sources.list
echo "deb-src http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib" >> /etc/apt/sources.list
echo "deb-src http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib" >> /etc/apt/sources.list
echo "deb-src http://mirrors.aliyun.com/debian-security buster/updates main" >> /etc/apt/sources.list
```



```sh
apt update	
```

