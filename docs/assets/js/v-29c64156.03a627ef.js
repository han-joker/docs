"use strict";(self.webpackChunkhan_joker_docs=self.webpackChunkhan_joker_docs||[]).push([[257],{6686:(l,n,e)=>{e.r(n),e.d(n,{data:()=>m});const m={key:"v-29c64156",path:"/protocol/tcp.html",title:"TCP",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"初见 TCP",slug:"初见-tcp",children:[]},{level:2,title:"TCP 的4层网络模型",slug:"tcp-的4层网络模型",children:[]},{level:2,title:"TCP 的特性",slug:"tcp-的特性",children:[]},{level:2,title:"三次握手建立连接， Three-way handshaking",slug:"三次握手建立连接-three-way-handshaking",children:[]},{level:2,title:"双向终止关闭连接，two-way termination",slug:"双向终止关闭连接-two-way-termination",children:[{level:3,title:"半开连接 Half-Open Connection",slug:"半开连接-half-open-connection",children:[]}]},{level:2,title:"TCP 连接状态",slug:"tcp-连接状态",children:[]},{level:2,title:"TCP 头结构",slug:"tcp-头结构",children:[{level:3,title:"常见选项",slug:"常见选项",children:[]},{level:3,title:"示例",slug:"示例",children:[]}]}],filePathRelative:"protocol/tcp.md",git:{updatedTime:1628927531e3}}},1172:(l,n,e)=>{e.r(n),e.d(n,{default:()=>Zl});var m=e(6252),t=e(7927),a=e(5629),r=e(2406),i=e(1075),W=e(8835),u=e(3962),s=e(2716),A=e(2040),o=e(3895),p=e(6682);const c=(0,m.Wm)("h1",{id:"tcp",tabindex:"-1"},[(0,m.Wm)("a",{class:"header-anchor",href:"#tcp","aria-hidden":"true"},"#"),(0,m.Uk)(" TCP")],-1),d={class:"table-of-contents"},C=(0,m.Uk)("初见 TCP"),b=(0,m.Uk)("TCP 的4层网络模型"),h=(0,m.Uk)("TCP 的特性"),T=(0,m.Uk)("三次握手建立连接， Three-way handshaking"),S=(0,m.Uk)("双向终止关闭连接，two-way termination"),P=(0,m.Uk)("半开连接 Half-Open Connection"),g=(0,m.Uk)("TCP 连接状态"),N=(0,m.Uk)("TCP 头结构"),k=(0,m.Uk)("常见选项"),I=(0,m.Uk)("示例"),U=(0,m.Wm)("h2",{id:"初见-tcp",tabindex:"-1"},[(0,m.Wm)("a",{class:"header-anchor",href:"#初见-tcp","aria-hidden":"true"},"#"),(0,m.Uk)(" 初见 TCP")],-1),f=(0,m.Wm)("p",null,"TCP是传输控制协议 (Transmission Control Protocol) 的缩写，它是一种通信标准，使应用程序和计算设备能够在网络上交换消息。它被设计用于在互联网上发送数据包，并确保通过网络成功传递数据和消息。",-1),w=(0,m.Wm)("p",null,"TCP 是定义 internet 规则的基本标准之一，是 internet 工程任务组 (internet Engineering Task Force, IETF) 定义的标准之一。它是数字网络通信中最常用的协议之一，确保端到端数据传输。TCP组织数据，以便在服务器和客户端之间传输数据。",-1),E=(0,m.Wm)("p",null,"它保证了在网络上传输的数据的完整性。在传输数据之前，TCP 在源和目标之间建立连接，并确保在通信开始之前该连接一直存在。然后，它将大量数据分解成更小的数据包，同时在整个过程中确保数据完整性。因此，需要传输数据的高级协议都使用 TCP 协议。例如括点对点（peer-to-peer ）共享方法，如 FTP (File Transfer Protocol)、SSH (Secure Shell) 和 Telnet。它还可以通过 IMAP (Internet Message Access Protocol)、POP (Post Office Protocol)、SMTP (Simple Mail Transfer Protocol) 收发电子邮件，通过 HTTP (Hypertext Transfer Protocol) 访问 web。",-1),O=(0,m.Wm)("p",null,"TCP 的另一种选择是用户数据报协议 UDP，它用于在应用程序之间建立低延迟连接来减少传输时间。TCP 可能是一种昂贵的网络工具，因为它包含缺失或损坏的数据包，并通过确认、连接启动和流控制等控制来保护数据传输。UDP 不提供错误连接或包排序，也不发送信号的目的地之前，它交付的数据，这使它更不可靠，但更便宜。因此，对于时间敏感的情况，如域名系统 (DNS) 查找、互联网协议语音 (VoIP) 和流媒体，它是一个很好的选择。",-1),F=(0,m.Wm)("h2",{id:"tcp-的4层网络模型",tabindex:"-1"},[(0,m.Wm)("a",{class:"header-anchor",href:"#tcp-的4层网络模型","aria-hidden":"true"},"#"),(0,m.Uk)(" TCP 的4层网络模型")],-1),B=(0,m.Wm)("p",null,"TCP/IP 模型定义了设备应该如何在它们之间传输数据，并允许通过网络和长距离通信。该模型表示数据如何在网络上交换和组织。它被分为四个层，为数据交换设置标准，并表示在应用程序、设备和服务器之间传递数据时如何处理和打包数据。",-1),K=(0,m.Wm)("p",null,"TCP/IP模型的四层结构如下:",-1),v=(0,m.Wm)("ul",null,[(0,m.Wm)("li",null,[(0,m.Wm)("strong",null,"数据链层，Datalink layer"),(0,m.Uk)(": 数据链层定义数据应该如何发送，处理发送和接收数据的物理行为，并负责在网络上的应用程序或设备之间传输数据。这包括定义如何通过硬件和网络上的其他传输设备(如计算机的设备驱动程序、以太网电缆、网络接口卡(NIC)或无线网络)发送数据。它也被称为链路层、网络接入层、网络接口层或物理层，是开放系统互连(OSI)模型的物理层和数据链路层的组合，该模型对计算和电信系统的通信功能进行标准化。")]),(0,m.Wm)("li",null,[(0,m.Wm)("strong",null,"网络层，Internet layer"),(0,m.Uk)(": 网络层负责从网络发送数据包，并控制它们在网络上的移动，以确保它们到达目的地。它提供了在应用程序和设备之间跨网络传输数据序列的功能和过程。")]),(0,m.Wm)("li",null,[(0,m.Wm)("strong",null,"传输层，Transport layer"),(0,m.Uk)(": 传输层负责在原始应用程序或设备与其预期目的地之间提供可靠的数据连接。在这一层，数据被分成包并编号以创建一个序列。然后，传输层决定必须发送多少数据，应该发送到哪里，以及以什么速率发送。它保证数据包按照正确的顺序发送，并得到目的设备已经接收到数据包的确认。")]),(0,m.Wm)("li",null,[(0,m.Wm)("strong",null,"应用层，Application layer"),(0,m.Uk)(": 应用层是指需要 TCP/IP 协议进行通信的程序。这是用户通常与之交互的级别，例如电子邮件系统和消息传递平台。它结合了 OSI 模型的会话层、表示层和应用层。")])],-1),H=(0,m.Wm)("blockquote",null,[(0,m.Wm)("p",null,"OSI（Open System Interconnect），即开放式系统互联。 一般都叫 OSI 参考模型，是 ISO（国际标准化组织）组织在1985年研究的网络互连模型。")],-1),x=(0,m.Wm)("table",null,[(0,m.Wm)("thead",null,[(0,m.Wm)("tr",null,[(0,m.Wm)("th",null,"TCP/IP 模型的4层"),(0,m.Wm)("th",null,"常用协议"),(0,m.Wm)("th",null,"数据单位"),(0,m.Wm)("th",null,"相对于 OSI")])]),(0,m.Wm)("tbody",null,[(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,"应用层"),(0,m.Wm)("td",null,"HTTP、FTP、SMTP"),(0,m.Wm)("td",null,"应用数据"),(0,m.Wm)("td",null,"应用层、表示层、会话层")]),(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,"传输层"),(0,m.Wm)("td",null,"TCP、UDP"),(0,m.Wm)("td",null,"段，segment"),(0,m.Wm)("td",null,"传输层")]),(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,"网络层"),(0,m.Wm)("td",null,"IP、ARP、RARP、ICMP"),(0,m.Wm)("td",null,"包，package"),(0,m.Wm)("td",null,"网络层")]),(0,m.Wm)("tr",null,[(0,m.Wm)("td",null,"数据链路层"),(0,m.Wm)("td",null,"Ethernet"),(0,m.Wm)("td",null,"帧，frame"),(0,m.Wm)("td",null,"数据链路层、物理层")])])],-1),R=(0,m.Wm)("p",null,"分层后，每层各司其职，互不干扰，层次封装:",-1),X=(0,m.Wm)("p",null,[(0,m.Wm)("img",{src:t,alt:"TCP数据封装"})],-1),D=(0,m.Wm)("h2",{id:"tcp-的特性",tabindex:"-1"},[(0,m.Wm)("a",{class:"header-anchor",href:"#tcp-的特性","aria-hidden":"true"},"#"),(0,m.Uk)(" TCP 的特性")],-1),L=(0,m.Wm)("ul",null,[(0,m.Wm)("li",null,[(0,m.Wm)("p",null,[(0,m.Wm)("strong",null,"可靠，Reliable"),(0,m.Uk)(" TCP 是一种可靠的协议，它遵循流程和错误控制机制。它还支持确认机制，该机制检查数据的状态和声音到达。在确认机制中，接收方向发送方发送确认或未未确认的信息，以便发送方知道数据包是否已被接收或需要重发。")])]),(0,m.Wm)("li",null,[(0,m.Wm)("p",null,[(0,m.Wm)("strong",null,"数据完整有序，Order of the data is maintained"),(0,m.Uk)(" 该协议确保数据完整地以发送的相同顺序到达预期的接收者。它对每个段进行排序和编号，以便目的端 TCP 层可以根据它们的顺序重新组装它们。")])]),(0,m.Wm)("li",null,[(0,m.Wm)("p",null,[(0,m.Wm)("strong",null,"面向连接，Connection-oriented"),(0,m.Uk)(" 它是一个面向连接的服务，这意味着数据交换只在连接建立之后发生。当数据传输完成时，连接将被终止。")])]),(0,m.Wm)("li",null,[(0,m.Wm)("p",null,[(0,m.Wm)("strong",null,"全双工，Full duplex"),(0,m.Uk)(" 它是一个全双工意味着数据可以在同一时间在两个方向传输。")])]),(0,m.Wm)("li",null,[(0,m.Wm)("p",null,[(0,m.Wm)("strong",null,"面向流，Stream-oriented"),(0,m.Uk)(" TCP是一种面向流的协议，因为它允许发送方以字节流的形式发送数据，也允许接收方以字节流的形式接收数据。")])])],-1),V=(0,m.Wm)("h2",{id:"三次握手建立连接-three-way-handshaking",tabindex:"-1"},[(0,m.Wm)("a",{class:"header-anchor",href:"#三次握手建立连接-three-way-handshaking","aria-hidden":"true"},"#"),(0,m.Uk)(" 三次握手建立连接， Three-way handshaking")],-1),y=(0,m.Wm)("p",null,"TCP 数据传输端分为发送端 Sender 和接收端 Receiver。通常发送端是客户端 Client 而接收端为服务端 Server。。",-1),Q=(0,m.Wm)("p",null,"TCP 建立连接的过程如下:",-1),j=(0,m.Wm)("ol",null,[(0,m.Wm)("li",null,"第一步，客户端向服务端发送连接同步请求，数据段中包含标志 SYN 表示连接同步。"),(0,m.Wm)("li",null,"第二步，服务端收到后，向客户端发送确认建立连接的消息。该消息带有标志 SYN 和 ACK 标志，表示确认连接，其中 ACK 表示确认。"),(0,m.Wm)("li",null,"第三步，客户端收到后，再向服务端发送收到确认连接的消息。该消息带有标志 ACK 来表示确认收到。")],-1),q=(0,m.Wm)("p",null,"以上三步，就是 TCP 连接建立的三次握手。就像两个人在对话: C(Client), S(Server)",-1),Z=(0,m.Wm)("p",null,[(0,m.Wm)("img",{src:a,alt:""})],-1),z=(0,m.Wm)("p",null,"再详细一些，TCP 在传递数据时，每个数据段都有顺序号 Sequence number 表示所载荷数据的字节起始序号，用 Seq=N 表示。",-1),G=(0,m.Wm)("p",null,"当数据段是确认数据时，也就是带有 ACK 标志的数据段时，需要包含确认号 Acknowledgment number 用 Ack=N 表示。Ack=N 表示确认接收到了 N-1 序列号的数据，同时期望下一次接收序列号 N 的数据。",-1),J=(0,m.Wm)("p",null,"上图中:",-1),M=(0,m.Wm)("ul",null,[(0,m.Wm)("li",null,"第一步 C 的 Seq=0 表示 C 的数据段顺序号是 0"),(0,m.Wm)("li",null,"第二步 S 的 Ack=1 表示确认 C 发送的 Seq=0 的数据段、Seq=0 表示 S 的数据段顺序号是 0"),(0,m.Wm)("li",null,"第三步 C 的 Ack=1 表示确认 S 发送的 Seq=0 的数据段、Seq=1 表示 S 的数据段顺序号是 1")],-1),Y=(0,m.Uk)("通过 "),_=(0,m.Uk)("WireShark"),$=(0,m.Uk)(" 工具来看一下，这个过程:"),ll=(0,m.Wm)("p",null,[(0,m.Wm)("img",{src:r,alt:"image-20210813105723544"})],-1),nl=(0,m.Wm)("p",null,"以上截图来自 WireShark 抓取本地 HTTP 请求。请求的第一步，就是建立 TCP 连接。红框圈出的就是三次握手的过程，我们可以清晰的看到，有三个步骤，以及携带的标志和核心数据。",-1),el=(0,m.Wm)("p",null,"至此，TCP 的客户、服务两端就建立了可靠的连接。可以完成数据传输了。",-1),ml=(0,m.Wm)("h2",{id:"双向终止关闭连接-two-way-termination",tabindex:"-1"},[(0,m.Wm)("a",{class:"header-anchor",href:"#双向终止关闭连接-two-way-termination","aria-hidden":"true"},"#"),(0,m.Uk)(" 双向终止关闭连接，two-way termination")],-1),tl=(0,m.Wm)("p",null,"当不再需要使用 TCP 连接，或连接超时时，会终止关闭连接。TCP 采用的时双向终止的策略来关闭连接。双向终止，指的是，客户端和服务端双方都会向对方发送一个终止数据段，来表示终止连接。由任何一端发起都可以，另一端再次发送一次即可。",-1),al=(0,m.Wm)("p",null,"双向终止的步骤总结如下，我们以由服务端发起为例（客户端亦然）:",-1),rl=(0,m.Wm)("ul",null,[(0,m.Wm)("li",null,"服务端发送一个 FIN 标志来通知客户端它不再想发送数据。FIN 标志表示结束会话"),(0,m.Wm)("li",null,"客户端确认收到终止数据段。确认需要 ACK 标志，以及 Ack=N 来说明确认的是哪条数据段"),(0,m.Wm)("li",null,"当客户端完成数据传输后，还会发送一个带有 FIN 标志的数据段。"),(0,m.Wm)("li",null,"服务端发送确认收到终止操作的数据段。同样需要 ACK 标志和 Ack=N")],-1),il=(0,m.Wm)("p",null,"通过 WireShark 来查看以下:",-1),Wl=(0,m.Wm)("p",null,[(0,m.Wm)("img",{src:i,alt:"image-20210813112049966"})],-1),ul=(0,m.Wm)("p",null,"以上截图来自 WireShark 抓取本地 HTTP 请求，当连接超时时，由服务端主动发起结束。红框圈出的就是双向终止的过程，可以看到:",-1),sl=(0,m.Wm)("ul",null,[(0,m.Wm)("li",null,"先是 80 -> 50572 通知后 50572 -> 80 确认"),(0,m.Wm)("li",null,"再是 50572 -> 80 通知后 80 -> 50572 确认")],-1),Al=(0,m.Wm)("p",null,"还是用两个人对话，那就是:",-1),ol=(0,m.Wm)("p",null,[(0,m.Wm)("img",{src:W,alt:""})],-1),pl=(0,m.Wm)("p",null,"还有，最后发送 ACK 的端（本例中是 S 端）连接不会立即终端，会保持一会，以保证最后的数据段被接收，RFC 793 中规范的是 2 分钟。",-1),cl=(0,m.Wm)("h3",{id:"半开连接-half-open-connection",tabindex:"-1"},[(0,m.Wm)("a",{class:"header-anchor",href:"#半开连接-half-open-connection","aria-hidden":"true"},"#"),(0,m.Uk)(" 半开连接 Half-Open Connection")],-1),dl=(0,m.Wm)("p",null,"若 A 端发送了 FIN 数据段，B 端 ACK 之后，B 端还允许继续向 A 端发送数据段，这个状态称为半开连接。",-1),Cl=(0,m.Wm)("p",null,"半开状态下，B 端可以将全部数据发送完毕后，再向 A 端发送 FIN 数据段，表示关闭连接。",-1),bl=(0,m.Wm)("h2",{id:"tcp-连接状态",tabindex:"-1"},[(0,m.Wm)("a",{class:"header-anchor",href:"#tcp-连接状态","aria-hidden":"true"},"#"),(0,m.Uk)(" TCP 连接状态")],-1),hl=(0,m.Wm)("p",null,"在 TCP 两端，建立连接、发送数据和断开连接的过程中，TCP 的状态是随之转换的，存在如下11种状态:",-1),Tl=(0,m.Wm)("ol",null,[(0,m.Wm)("li",null,"CLOSED: 连接关闭，初始状态"),(0,m.Wm)("li",null,"LISTEN: 监听，TCP 端口监听状态"),(0,m.Wm)("li",null,"SYN_SENT: 同步发送，客户端 SYN 段发送后，客户端的连接进入该状态"),(0,m.Wm)("li",null,"SYN_RCVD: 同步接收，服务端收到客户端的 SYN 段后，向客户端发送 SYN-ACK 确认段后，服务端进入该状态"),(0,m.Wm)("li",null,"ESTABLISHED: 建立连接，客户端接收到服务端发送的 SYN-ACK 段后，向服务端发送 ACK 段确认，此时客户端变为 ESTABLISHED 状态，当服务端接收到客户端发送的 ACK 段后，服务端同样变为 ESTABLISHED 状态。ESTABLISHED 状态后，客户端与服务端就可以发送应用数据了。"),(0,m.Wm)("li",null,"FIN_WAIT_1: 结束等待1，主动关闭端（服务端、客户端都可以）要关闭连接时，会发送 FIN 段到被动关闭端。此时主动关闭端转为 FIN_WAIT_1 状态，表示等待被动关闭端确认"),(0,m.Wm)("li",null,"FIN_WAIT_2: 结束等待2，主动关闭端若接收到了被动关闭端发送的关于 FIN 的 ACK，则主动关闭端转为 FIN_WAIT_2 状态，表示等待被动关闭端方向的 FIN 段。"),(0,m.Wm)("li",null,"TIME_WAIT: 持续等待，主动关闭端若接收到了被动关闭端方向的 FIN 段，给被动关闭端 ACK 确认，此时主动关闭端转为 TIME_WAIT 状态，表示等待被动关闭段 ACK 确认段接收完成，这个等待时间为 2 分钟左右，后主动关闭端进入 CLOSED 关闭状态。"),(0,m.Wm)("li",null,"CLOSE_WAIT: 关闭等待，被动关闭端接收到了主动关闭端发送的 FIN 段后，向主动关闭段发送 ACK 确认，之后被动关闭端进入 CLOSE_WAIT 状态，会继续将未发送完的数据段发送到另一端，然后向主动关闭端发送 FIN 段"),(0,m.Wm)("li",null,"LAST_ACK: 最后确认，被动关闭端把 FIN 发送给主动关闭端后，进入 LAST_ACK 状态，表示等待最后的确认，一旦接收到了主动关闭端的 ACK，则被动关闭端进入 CLOSED 状态，连接关闭"),(0,m.Wm)("li",null,"CLOSING: 由于 TCP 是全双工协议，意味着可能出现客户端和服务端都是主动关闭端，也就是两端同时向对方发送了 FIN 段，此时双方都进入 FIN_WAIT_1 状态，都在等待对方的 ACK 确认。但未等到 ACK 确认，等到的却是对方的 FIN 段，此时就进入 CLOSING 状态，之后向对方发送 ACK 确认后，直接都进入 CLOSED 状态，连接关闭")],-1),Sl=(0,m.Wm)("p",null,"配合示意图，进行了解:",-1),Pl=(0,m.Wm)("p",null,"建立连接时的状态转变:",-1),gl=(0,m.Wm)("p",null,[(0,m.Wm)("img",{src:u,alt:""})],-1),Nl=(0,m.Wm)("p",null,"关闭连接时状态的改变:",-1),kl=(0,m.Wm)("p",null,[(0,m.Wm)("img",{src:s,alt:""})],-1),Il=(0,m.Wm)("p",null,"CLOSING 状态示意图:",-1),Ul=(0,m.Wm)("p",null,[(0,m.Wm)("img",{src:A,alt:""})],-1),fl=(0,m.Wm)("h2",{id:"tcp-头结构",tabindex:"-1"},[(0,m.Wm)("a",{class:"header-anchor",href:"#tcp-头结构","aria-hidden":"true"},"#"),(0,m.Uk)(" TCP 头结构")],-1),wl=(0,m.Wm)("p",null,"通常，TCP 段的头包含使用传输控制协议进行连接和数据传输所需的元数据。这个头数据(包含控制信息)位于要传输的有效负载之前，大小通常为20字节(160位)。紧随其后的是多达40字节(320位)的选项信息，这是可选的，并不是在所有包中都使用。",-1),El=(0,m.Wm)("p",null,"整体 TCP 数据结构图:",-1),Ol=(0,m.Wm)("p",null,[(0,m.Wm)("img",{src:o,alt:""})],-1),Fl=(0,m.Wm)("p",null,"TCP 头部结构图:",-1),Bl=(0,m.Wm)("p",null,[(0,m.Wm)("img",{src:p,alt:""})],-1),Kl=(0,m.Wm)("p",null,"字段说明:",-1),vl=(0,m.Wm)("ul",null,[(0,m.Wm)("li",null,"源端口号(16位): 发送端口号"),(0,m.Wm)("li",null,"目的端口(16位): 接收端口号"),(0,m.Wm)("li",null,"顺序号(32位): 顺序号指定附加的载荷数据的第一个字节的位置，或者在连接建立或终止时发送。它还用于在传输后验证和排序片段。"),(0,m.Wm)("li",null,"确认号(32位): 该字段包含发送方期望的下一个顺序号。在 ACK 标志时有效。"),(0,m.Wm)("li",null,"Hlen(4位): Header Length，指定 TCP 头的长度，由于选项 “Options” 字段长度可变，因此头总长度可变在 20-60 范围内。头的长度也说明了载荷数据的起始位置。"),(0,m.Wm)("li",null,"Reserved: 预留，目前尚未使用。该字段必须始终设置为0，预留的位数当前版本为 2 位。"),(0,m.Wm)("li",null,[(0,m.Uk)("Flags(9位): 标志，不同标志位置一表示设置，具体标志位含义: "),(0,m.Wm)("ol",null,[(0,m.Wm)("li",null,"Noc: Nonce， 随机数"),(0,m.Wm)("li",null,"CWR: Congestion Window Reduced，拥塞窗口缩减（发送方降低它的发送速率）。"),(0,m.Wm)("li",null,"ECE: ECN-Echo，ECN回显（发送方接收到了一个更早的拥塞通告）"),(0,m.Wm)("li",null,"URG: Urgent，紧急（紧急指针字段有效，很少用）"),(0,m.Wm)("li",null,"ACK: Acknowledgment 确认"),(0,m.Wm)("li",null,"PSH: Push 推送（几乎没被用到）"),(0,m.Wm)("li",null,"RST: Reset 重置连接（连接取消）"),(0,m.Wm)("li",null,"SYN: 同步连接"),(0,m.Wm)("li",null,"FIN: 结束发送")])]),(0,m.Wm)("li",null,"Window Size 数据窗口大小(16位): 它包含接收方可以接受的数据大小。该字段用于发送方和接收方之间的流量控制，还决定了接收方为一个段分配的缓冲区的数量。这个字段的值由接收方决定。"),(0,m.Wm)("li",null,"校验和(16位): 传输控制协议能够可靠地检测传输错误。由报头、有效负载数据和伪报头来计算，该校验算法与 IP、ICMP、UDP 校验算法一致。"),(0,m.Wm)("li",null,"紧急指针(16位): 紧急指针表示需要紧急处理的载荷数据的第一个字节的位置。该字段只有在设置了 URG 标志时才有效和相关。"),(0,m.Wm)("li",null,"Options(0 - 320位): 它提供了额外的选项。可选字段用32位表示。如果该字段包含小于32位的数据，则需要填充以获得剩余的位。")],-1),Hl=(0,m.Wm)("h3",{id:"常见选项",tabindex:"-1"},[(0,m.Wm)("a",{class:"header-anchor",href:"#常见选项","aria-hidden":"true"},"#"),(0,m.Uk)(" 常见选项")],-1),xl=(0,m.Wm)("p",null,"除了 TCP 头中包含的常规元数据外，在头选项中还可包含额外的内容。",-1),Rl=(0,m.Wm)("p",null,"选项中，除 NOP 和 EOL 是单字节外，其他选项都是由1字节 Kind、1字节 Length 和选项内容组成。",-1),Xl=(0,m.Wm)("p",null,"理论上，可以存在任意的选项，通常的实现会识别特定的选项，不能识别的选项会被忽略。",-1),Dl=(0,m.Wm)("p",null,"常用的选项说明如下:",-1),Ll=(0,m.Wm)("ul",null,[(0,m.Wm)("li",null,[(0,m.Wm)("p",null,"EOL，End Of Option List, 选项列表结束，通常当选项列表结束时长度与头中的 Header Length 不匹配时添加"),(0,m.Wm)("ul",null,[(0,m.Wm)("li",null,"Kind: 0")])]),(0,m.Wm)("li",null,[(0,m.Wm)("p",null,"NOP，No-Operation，非操作，主要用来对齐选项数据"),(0,m.Wm)("ul",null,[(0,m.Wm)("li",null,"Kind: 1")])]),(0,m.Wm)("li",null,[(0,m.Wm)("p",null,"MSS，Maximum Segment Size，最大段尺寸，是 TCP 期望从对端接收的最大的数据段长度，仅指 TCP 数据长度，并不包含关联的 TCP 头和 IP 头的长度，通常会在对应的 SYN 段中通过 MSS option 通告对方自己的 MSS。"),(0,m.Wm)("ul",null,[(0,m.Wm)("li",null,"Kind: 2"),(0,m.Wm)("li",null,"Length: 4")])]),(0,m.Wm)("li",null,[(0,m.Wm)("p",null,"Window scala, 窗口伸展, 在长肥管道中, 当发送端 TCP 需要更大的接收窗口的时候,使用该选项进行扩展, 该选项的值表示原来窗口大小左移的大小, 也就是实际窗口=WindowSize << Shift count. 由于在建立连接时需要确定窗口大小, 因此该选项要在 SYN 包中发送."),(0,m.Wm)("ul",null,[(0,m.Wm)("li",null,"Kind: 3"),(0,m.Wm)("li",null,"Length: 3"),(0,m.Wm)("li",null,"Shift count:")])]),(0,m.Wm)("li",null,[(0,m.Wm)("p",null,"SACK-Permitted, SACK 机制是否存在的标识, 存在该选项, 表示当前端支持 SACK 扩展."),(0,m.Wm)("ul",null,[(0,m.Wm)("li",null,"Kind: 4"),(0,m.Wm)("li",null,"Length: 2")])]),(0,m.Wm)("li",null,[(0,m.Wm)("p",null,"SACK, 选择确认选项, SACK 扩展用来实现不连续数据段的高效重传功能. 用来表示已经接收的不连续的数据块信息.")]),(0,m.Wm)("li",null,[(0,m.Wm)("p",null,"UTO, User TimeOut, 用户超时选项, 指明了 TCP 发送端愿意等待 ACK 确认的时间")])],-1),Vl=(0,m.Wm)("h3",{id:"示例",tabindex:"-1"},[(0,m.Wm)("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),(0,m.Uk)(" 示例")],-1),yl=(0,m.Uk)("下面展示一个使用 "),Ql=(0,m.Uk)("WireShark"),jl=(0,m.Uk)(" 获取的 TCP 数据段内容，该内容是建立连接的第二步，也就是服务端的 SYN-ACK 段："),ql=(0,m.Wm)("div",{class:"language-text ext-text line-numbers-mode"},[(0,m.Wm)("pre",{class:"language-text"},[(0,m.Wm)("code",null,"Frame 20: 76 bytes on wire (608 bits), 76 bytes captured (608 bits) on interface \\Device\\NPF_Loopback, id 0\nNull/Loopback\nInternet Protocol Version 6, Src: ::1, Dst: ::1\nTransmission Control Protocol, Src Port: 80, Dst Port: 50572, Seq: 0, Ack: 1, Len: 0\n    Source Port: 80\n    Destination Port: 50572\n    [Stream index: 3]\n    [TCP Segment Len: 0]\n    Sequence Number: 0    (relative sequence number)\n    Sequence Number (raw): 2023324573\n    [Next Sequence Number: 1    (relative sequence number)]\n    Acknowledgment Number: 1    (relative ack number)\n    Acknowledgment number (raw): 1259542717\n    1000 .... = Header Length: 32 bytes (8)\n    Flags: 0x012 (SYN, ACK)\n        000. .... .... = Reserved: Not set\n        ...0 .... .... = Nonce: Not set\n        .... 0... .... = Congestion Window Reduced (CWR): Not set\n        .... .0.. .... = ECN-Echo: Not set\n        .... ..0. .... = Urgent: Not set\n        .... ...1 .... = Acknowledgment: Set\n        .... .... 0... = Push: Not set\n        .... .... .0.. = Reset: Not set\n        .... .... ..1. = Syn: Set\n        .... .... ...0 = Fin: Not set\n        [TCP Flags: ·······A··S·]\n    Window: 65535\n    [Calculated window size: 65535]\n    Checksum: 0x570b [unverified]\n    [Checksum Status: Unverified]\n    Urgent Pointer: 0\n    Options: (12 bytes), Maximum segment size, No-Operation (NOP), Window scale, No-Operation (NOP), No-Operation (NOP), SACK permitted\n        TCP Option - Maximum segment size: 65475 bytes\n        TCP Option - No-Operation (NOP)\n        TCP Option - Window scale: 8 (multiply by 256)\n            Kind: Window Scale (3)\n            Length: 3\n            Shift count: 8\n            [Multiplier: 256]\n        TCP Option - No-Operation (NOP)\n        TCP Option - No-Operation (NOP)\n        TCP Option - SACK permitted\n            Kind: SACK Permitted (4)\n            Length: 2\n    [SEQ/ACK analysis]\n    [Timestamps]\n\n")]),(0,m.Wm)("div",{class:"line-numbers"},[(0,m.Wm)("span",{class:"line-number"},"1"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"2"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"3"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"4"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"5"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"6"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"7"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"8"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"9"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"10"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"11"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"12"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"13"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"14"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"15"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"16"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"17"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"18"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"19"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"20"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"21"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"22"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"23"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"24"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"25"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"26"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"27"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"28"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"29"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"30"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"31"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"32"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"33"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"34"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"35"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"36"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"37"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"38"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"39"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"40"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"41"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"42"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"43"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"44"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"45"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"46"),(0,m.Wm)("br"),(0,m.Wm)("span",{class:"line-number"},"47"),(0,m.Wm)("br")])],-1),Zl={render:function(l,n){const e=(0,m.up)("RouterLink");return(0,m.wg)(),(0,m.j4)(m.HY,null,[c,(0,m.Wm)("nav",d,[(0,m.Wm)("ul",null,[(0,m.Wm)("li",null,[(0,m.Wm)(e,{to:"#初见-tcp"},{default:(0,m.w5)((()=>[C])),_:1})]),(0,m.Wm)("li",null,[(0,m.Wm)(e,{to:"#tcp-的4层网络模型"},{default:(0,m.w5)((()=>[b])),_:1})]),(0,m.Wm)("li",null,[(0,m.Wm)(e,{to:"#tcp-的特性"},{default:(0,m.w5)((()=>[h])),_:1})]),(0,m.Wm)("li",null,[(0,m.Wm)(e,{to:"#三次握手建立连接-three-way-handshaking"},{default:(0,m.w5)((()=>[T])),_:1})]),(0,m.Wm)("li",null,[(0,m.Wm)(e,{to:"#双向终止关闭连接-two-way-termination"},{default:(0,m.w5)((()=>[S])),_:1}),(0,m.Wm)("ul",null,[(0,m.Wm)("li",null,[(0,m.Wm)(e,{to:"#半开连接-half-open-connection"},{default:(0,m.w5)((()=>[P])),_:1})])])]),(0,m.Wm)("li",null,[(0,m.Wm)(e,{to:"#tcp-连接状态"},{default:(0,m.w5)((()=>[g])),_:1})]),(0,m.Wm)("li",null,[(0,m.Wm)(e,{to:"#tcp-头结构"},{default:(0,m.w5)((()=>[N])),_:1}),(0,m.Wm)("ul",null,[(0,m.Wm)("li",null,[(0,m.Wm)(e,{to:"#常见选项"},{default:(0,m.w5)((()=>[k])),_:1})]),(0,m.Wm)("li",null,[(0,m.Wm)(e,{to:"#示例"},{default:(0,m.w5)((()=>[I])),_:1})])])])])]),U,f,w,E,O,F,B,K,v,H,x,R,X,D,L,V,y,Q,j,q,Z,z,G,J,M,(0,m.Wm)("p",null,[Y,(0,m.Wm)(e,{to:"/tools/wireshark.html"},{default:(0,m.w5)((()=>[_])),_:1}),$]),ll,nl,el,ml,tl,al,rl,il,Wl,ul,sl,Al,ol,pl,cl,dl,Cl,bl,hl,Tl,Sl,Pl,gl,Nl,kl,Il,Ul,fl,wl,El,Ol,Fl,Bl,Kl,vl,Hl,xl,Rl,Xl,Dl,Ll,Vl,(0,m.Wm)("p",null,[yl,(0,m.Wm)(e,{to:"/tools/wireshark.html"},{default:(0,m.w5)((()=>[Ql])),_:1}),jl]),ql],64)}}},2406:(l,n,e)=>{l.exports=e.p+"assets/img/image-20210813105723544.bf722912.png"},1075:(l,n,e)=>{l.exports=e.p+"assets/img/image-20210813112049966.59a51155.png"},2040:(l,n,e)=>{l.exports=e.p+"assets/img/tcp-closing-status.3a3780ef.png"},7927:(l,n,e)=>{l.exports=e.p+"assets/img/tcp-data-packing.d2ef3ef5.png"},8835:(l,n,e)=>{l.exports=e.p+"assets/img/tcp-fin-chat.d0a5dfe3.png"},2716:(l,n,e)=>{l.exports=e.p+"assets/img/tcp-fin-status.5d13e763.png"},6682:(l,n,e)=>{l.exports=e.p+"assets/img/tcp-header-format.8b7a70f7.png"},3895:l=>{l.exports="data:image/png;base64,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"},5629:(l,n,e)=>{l.exports=e.p+"assets/img/tcp-syn-chat.a0fdae66.png"},3962:(l,n,e)=>{l.exports=e.p+"assets/img/tcp-syn-status.2c8648d7.png"}}]);