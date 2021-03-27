---
slug: fixing-mem-leaks-node
title: Fixing Memory Leaks in Node.js Applications
author: AnuRock
author_title: XT Architect @ Publicis Sapient
author_url: https://github.com/anu-rock
author_image_url: https://avatars.githubusercontent.com/u/1288616?v=4
tags: [nodejs, memory-leak, fix]
---

Itʼs a common practice to do performance load testing of web
applications as part of NFR tests a few weeks before go-live. As it
happened in a few performance test sessions in my project, we saw
occasional spikes in memory usage (as high as 85%!) of our serverside Node application. In large enterprise applications, itʼs almost
impossible to predict the root cause of such spikes. How do you
debug and fix memory-related issues?

The answer in most cases is **heap dump analysis**. This is easy to do
in a V8 ecosystem. Since both Node.js and Chrome use V8 as their
JavaScript engine, they complement each other superbly in the
debugging process. Itʼs almost stupidly easy to visually analyse a
Node appʼs memory footprint in Chromeʼs DevTools.

https://marmelab.com/blog/2018/04/03/how-to-track-and-fix-memory-leak-with-nodejs.html
