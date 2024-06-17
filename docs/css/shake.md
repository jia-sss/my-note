## 元素左右抖动效果

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<link rel="stylesheet" href="./main.css" />
		<title>3d Vector Kata</title>

		<style>
			/* Standard syntax */
			@keyframes shake {
				10%,
				90% {
					transform: translate3d(-1px, 0, 0);
				}

				20%,
				80% {
					transform: translate3d(2px, 0, 0);
				}

				30%,
				50%,
				70% {
					transform: translate3d(-4px, 0, 0);
				}

				40%,
				60% {
					transform: translate3d(4px, 0, 0);
				}
			}

			.apply-shake {
				animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
			}
		</style>
	</head>
	<body>
		<form id="test-form">
			<input type="text" id="test-input" />
			<button type="submit" id="submit-button" onclick="shakeAnimation()">
				Submit
			</button>
		</form>
		<script src="./index.js"></script>
	</body>
</html>

<script>
	const input = document.querySelector("input#test-input");
	const submit = document.querySelector("button#submit-button");

	submit.addEventListener("click", e => {
		e.preventDefault();
		if (input.value === "") {
			submit.classList.add("apply-shake");
		}
	});

	submit.addEventListener("animationend", e => {
		submit.classList.remove("apply-shake");
	});
</script>
```

## 多行文本省略号
```css
overflow: hidden;
display: -webkit-box;
text-overflow: ellipsis;
/* autoprefixer: ignore next */
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
```