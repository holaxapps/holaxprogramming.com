---
title: 컴퓨터는 왜 불편한 이진수를 사용할까?
date: 2013-01-11 15:54:07
categories: fundamental
---


#### 십진수와 이진수

일반적으로 우리에게 익숙한 숫자는 아래와 같은 십진수이다.

```
1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ...
```

하지만 컴퓨터는 위와 같이 인간이 이해하는 십진수를 이해할수 없다. 컴퓨터는 0 또는 1과 같은 이진수만을 이해하는데 이러한 이유는 무엇 일까?


#### 컴퓨터의 논리 회로

컴퓨터는 논리 회로를 통해 연산하는 기계이다. 이 논리 회로는 전기 신호를 구분하는 기능이 있다. 더 구체적으로 말하면 5v의 전기 신호가 발생하면 `1` 0v이면 `0`으로 인식한다는 것이다. 

전기 신호를 인간과 같이 1부터 10까지를 구분하여 연산할수는 없을까? 10개의 신호를 구분하기 위해서는 전기 신호를 강약을 정해 구분해야 할텐데 예를 들면 0.5v단위로 전기 신호를 나누어 구분하는 것은 현실적으로 힘들다고 할 수 있다.

왜나하면 실제로는 내부적인 요인 또는 노이즈와 같은 외부적인 요인으로 인해 정확한 전압을 측정하기 어려울 뿐만 아니라 이를 위해서는 논리 회로를 더욱 정교하게 구성해야 하고 정확한 전압을 측정하기 위한 대기 시간이 길어지기 때문에 더 많은 비용이 발생하게 된다. 결과적으로 컴퓨터는 1, 0으로 단순하게 두가지의 경우만을 구분하여 반복적으로 계산하는 것이 훨씬 유리하게 되는 것이다. 

