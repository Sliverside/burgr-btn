# burgr-btn

A burger button object oriented in sass

![alt text](https://raw.githubusercontent.com/Sliverside/burgr-btn/master/screencaptures/demo.gif "demo burgr-btn")

## Getting Started

### Static way (css)

You just have to take the burgr-btn.css and link it to your head.
Then, in the html file use it like that :
```
<div class="burgr">
  <span class="burgr-part"></span>
  <span class="burgr-part"></span>
  <span class="burgr-part"></span>
</div>
```
*ps : I'll later make it more simple by adding js and then you can use it like that :*
```
<div class="burgr"></div>
```
### Dynamic way (scss)

#### Step \#1 install sass

You can go to the [sass install webpage](https://sass-lang.com/install)

#### Step \#2 create the structure

##### way 1 ->
__Document structure :__
```
your project
|   index.html
|
|-- stylesheets
|   |   style.scss
|   |   style.css
|   |   burgr-btn.setup.scss
|   |   burgr-btn.setup.css
|
|-- addons
|   |-- burgr-btn
|   |   |   _burgr-btn.scss
|   |   |
|   |   |-- helpers
|   |   |   |   _functions.scss
|   |   |   |   _breakpointsObj.scss
|   |   |   |   _math.scss
```

__burgr-btn.setup.scss :__

```
$burgr: (
  'width':50px,
  'stroke': 5px,
  'space-between': 4px,
  ),
);

// Some other parameters here

@import "../addons/burgr-btn/burgr-btn";
```

__index.html head :__

```
<link rel="stylesheet" href="stylesheets/burgr-btn.setup.css">
```
##### way 2 ->
__Document structure :__
```
your project
|   index.html
|
|-- stylesheets
|   |   style.scss
|   |   style.css
|
|-- addons
|   |-- burgr-btn
|   |   |   _burgr-btn.scss
|   |   |
|   |   |-- helpers
|   |   |   |   _functions.scss
|   |   |   |   _breakpointsObj.scss
|   |   |   |   _math.scss
```

__style.scss :__

```
$burgr: (
  'width':50px,
  'stroke': 5px,
  'space-between': 4px,
  ),
);

// Some other parameters here

@import "../addons/burgr-btn/burgr-btn";
```

#### Step \#3 write your parameters
