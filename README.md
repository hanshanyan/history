
欢迎来到寒山唁的个人历史研究资料库。

# 可用EMOJI 📜
📚 研究方向
📂 仓库目录
✍️ 写作原则
📖 推荐阅读
📌 更新记录
🔍 当前研究专题
⭐ 标星
✅ 推荐
❌ 不推荐
📜 回忆录
📅 年谱
📝 专题研究 
🏛 文库
⚖️ 争议
🖼️ 图片
🔴 重要
⚠️ 注意
❦ 分隔符

# 代码
cd C:/Users/liwen/history 
git add quartz/plugins/folder-filter/dist/index.js 
git commit -m "filter folder px" 
git push origin main

# 年谱
> [!info] 用法
> 三栏平行年谱：每栏一个「谱」，从上往下按日期记录。新增一个「谱」就加一个 `<div>`；新增一条目就在对应 `<div>` 里加一段（空一行分隔即为新段落）。
> 增删月份：用 `## 年月` 作小标题，标题下放入一个 `<div class="chronology">…</div>` 即可。

<details> <summary>概述</summary>完整</details>

<div class="chronology">

<div>

**官方大事件**

</div>

<div>

**张鹤军谱**

</div>

<div>

**李德谱**

</div>

</div>

# YAML 客观信息
title：标题
author：作者
tags：标签
publish：出版时间
origin：来源
aliases：别名

type：类别
period：时期
event：时间
places：地点
people：人物

唯一性、可排序、可筛选、可统计

# Tags 主观分类
（1）主题
战史回忆 口述史 回忆录 电报 文集 讲话 论文 综述

（2）历史时期
 #27-28井冈山 #34-36长征 #37-45抗日 #45-50解放战争 #50-71建国后

（3）研究专题
 # 辽沈战役 # 平型关 # 四野 # 军事思想

（4）人物身份
#工作人员 #亲人 #相关人士

# Obsidian小贴士
外联：[外链名字](外链地址)
内链：[[ao-shan-miao|敖山庙伏击]]
段落跳转：[[ao-shan-miao#^1|原文跳转 ↗]]
段落引用：![[ao-shan-miao#^1]]

## 章节跳转

[Quartz自定义](#Quartz自定义)

## 文字处理
`标灰`、<kbd> Ctrl </kbd>
**加粗**
*斜体*
***粗斜体***
~~删除线~~
==高亮==
<p align="right"> 右起 </p>
<p align="center"> 居中 </p>
下标：H<sub>2</sub>O
上标：10<sup>6</sup>


## 段落处理 

Callout

> [!quote] Quote｜引文、原始史料

> [!example] Example｜举例

> [!info] Info｜背景介绍

> [!todo] Todo｜尚待考证的问题

> [!note] Note｜一般说明、补充说明

> [!abstract] Abstract｜摘要、文章概述

> [!summary] Summary｜总结（abstract 的别名）

> [!tldr] TL;DR｜太长不看版

> [!tip] Tip｜阅读建议、研究技巧

> [!hint] Hint｜tip 的别名

> [!important] Important｜特别重要

> [!success] Success｜已确认事实

> [!check] Check｜success 别名

> [!done] Done｜success 别名

> [!question] Question｜存疑、待讨论

> [!help] Help｜求助、疑问

> [!faq] FAQ｜常见问题

> [!warning] Warning｜有争议、需谨慎

> [!attention] Attention｜warning 别名

> [!caution] Caution｜warning 别名

> [!failure] Failure｜被证伪观点

> [!fail] Fail｜failure 别名

> [!missing] Missing｜史料缺失

> [!danger] Danger｜高度争议、严重错误

> [!error] Error｜文献错误

> [!bug] Bug｜（程序笔记常用）


## Quartz自定义

修改高亮颜色：
mark {
    background: # ffd54f;
}

修改Refer颜色：
> 后来回忆……


blockquote {
    border-left:5px solid # b22222;
}

修改Quote颜色：
> [!quote] Quote
 
.callout[data-callout="quote"]

修改标题风格（牛津历史系风）
h1 { color:#7c1f1f; }