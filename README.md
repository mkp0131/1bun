# 인터랙티브 웹 개발 제대로 시작하기

## 1. transform

1. 성능이 좋다(하드웨어 가속이용) - position 보다 훨씬 좋음.

## 2. animation

1. alternate: 0 ~ 100% -> 100% ~ 0 으로 반복
2. animation-play-state: 애니메이션 상태를 조정(pause 가능, 기본값: runnig)
3. 애니메이션 속도: linear 등속도(일정한 변화)
4. step(숫자): 몇번의 step으로 100%로 만들지 설정
5. forwards: 100%의 모양으로 종료(유지)

## 3. perspective

1. 시점의 위치(값이 가까울수록 3D 효과가 더 들어간다.)
2. transform 안에 사용: perspective(50px)

## 4. backface-visibility: 뒷명을 보이지 않게 한다.(hidden)

## 5. transform-style: preserve-3d;

1. 3d 공간에 배치
2. 기본값은 flat

> 3D CSS 브라우저 지원 이슈가 있음.

## 6. flex

1. flex-grow: flex 아이템들이 가지는 영역의 비율(여백을 나누어 가진다.)
2. flex-basis: 여백이 아닌 컨텐츠들의 영역을 어떻게 처리할지 (기본값: auto)
-> 0 으로 넣으면 flex-grow로 균등하게 배분 가능


## 7. dataset: html 태그 내에 data-{네임} 으로 표준 커스텀 속성을 저장 할 수 있다.