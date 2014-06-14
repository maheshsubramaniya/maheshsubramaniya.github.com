---
layout: post
title: When to re-factor your code
excerpt: When to re-factor and when not
categories: ['programming','software development']
tags: ['software development','refactoring']
---
Refactoring is a must needed exercise in every software module, but everything has its cost.

#### Do not do refactoring if it is absolutely not required. 
I do not question your intention. If you are tempted to re-factor a large code, ask yourself if it is **absolutely** necessary. If your refactoring is not going to yield any **absolute** benefit, then stop it.

#### Many Incremental changes are better
If the code you are going to re-factor leads to refactoring other code and it chains reaction. You should stop. Turn your focus on to the other modules and re-factor incrementally.

#### Make sure to pass existing tests.
No questions asked.

#### Follow coding standards of your company
This is like talking same language to anyone reading your code. If you break the coding standards, then you break the grammar and people have difficulty in understanding and if someone doesnt understand what you have done, then it voids your work.

#### No ego in personal preference
And don't get your personal preference into the code. If you think that what you are doing is awesome, then take it to the standards group and then get it done. Don't sneak it.

#### Language gets a new API
Good thing to know, but still doesn't make a solid case to re-factor your code. It is probably the best candidate for new code.
