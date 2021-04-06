# 인터랙티브 웹 개발 제대로 시작하기

## 1. transform

1. 성능이 좋다(하드웨어 가속이용) - position 보다 훨씬 좋음.

## 2. animation

1. alternate: 0 ~ 100% -> 100% ~ 0 으로 반복
2. animation-play-state: 애니메이션 상태를 조정(pause 가능, 기본값: runnig)
3. 애니메이션 속도: linear 등속도(일정한 변화)
4. step(숫자): 몇번의 step으로 100%로 만들지 설정
5. forwards: 100%의 모양으로 종료(유지)
6. 숫자를 적어주어 애니메이션을 실행할 횟수도 지정할수있다.

## 3. perspective: css 3d 효과는 공간을 3d로 만들어야한다.

1. 시점의 위치(값이 가까울수록 3D 효과가 더 들어간다.)
2. transform 안에 사용: perspective(50px), 3d 요소들의 시점이 조금씩 다를때 (중요!!!!!)


## 4. backface-visibility: 뒷명을 보이지 않게 한다.(hidden)

## 5. transform-style: preserve-3d;

1. 3d 공간에 배치
2. 기본값은 flat

> 3D CSS 브라우저 지원 이슈가 있음.

## transition-delay: 효과가 적용에 딜레이를 줄 수 있다.

## 6. flex

1. flex-grow: flex 아이템들이 가지는 영역의 비율(여백을 나누어 가진다.)
2. flex-basis: 여백이 아닌 컨텐츠들의 영역을 어떻게 처리할지 (기본값: auto)
-> 0 으로 넣으면 flex-grow로 균등하게 배분 가능


## 7. dataset: html 태그 내에 data-{네임} 으로 표준 커스텀 속성을 저장 할 수 있다.

## 8. 이벤트 핸들러로 함수가 사용될때는 첫번째 인자(parameter)로 event 객체를 받은다.

## 9. 이벤트 위임으로 버튼을 작동시킬때, 버튼안에 요소들이 있을경우, event.target이 안에있는 요소가 될수있다. 그럴땐 for 문을 이용하여 event.target을 잡아준다.
```
let elem = e.target;
while (!elem.classList.contains('door')) {
	elem = elem.parentNode;
}
```

## 10. css 속성에서 3d가 붙은 속성들은 하드웨어 가속을 사용한다.
```
transform: translate3d(0, 0, 0);
```

## 11. addEventListener 에서는 transition 의 start, end 그리고 animation 의 start, end, repeat에 이벤트를 걸어줄수있다.


## 12. requestAnimationFrame
1. setInterval 을 대신해서 사용한다.
2. 1초에 60프레임 목표
3. 재귀함수처럼 사용한다.
```
	function sample() {
			console.log('#ani');
			timeOut = requestAnimationFrame(sample);
		}
```