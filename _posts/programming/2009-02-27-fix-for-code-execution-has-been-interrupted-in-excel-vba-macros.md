---
layout: post
title: Fix for Code execution has been interrupted in Excel vba macros.
categories:
  - programming
---

In excel, while executing macros you may get the error message "code execution has been interrupted". Generally this error message should appear only if you hit "Ctrl +Break" to stop the execution and view the code. But there may be certain instances, where you may get this error message even without pressing "Ctrl + Break". If you hit "Continue" button, the code will execute for a while but again you may get the same error message. At one point of time, you may need to click "continue" button many times to execute a macro. There may be plent of reasons behind it like new software installation, key settings etc..

Problem Solution:

The solution for this problem is to add the line of code `Application.EnableCancelKey = xlDisabled` in the first line of your macro.. This will fix the problem and you will be able to execute the macro successfully without getting the error message "Code execution has been interrupted".

Thanks: This tip is given by one of my collegue Vijayaragavan.
