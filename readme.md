# burgr-btn

A burger button object oriented in sass

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
ps : I'll later make it more simple by adding js and then you can use it like that :
```
<div class="burgr"></div>
```
### Dynamic way (scss)

#### Step \#1 install sass

You can go to the [sass install webpage](https://sass-lang.com/install)

#### Step \#2 create the structure

__way 1:__
Document structure :
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
```

burgr-btn.setup.scss should look like this :

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

add this to your index.html head :

```
<link rel="stylesheet" href="stylesheets/burgr-btn.setup.css">
```

#### Step \#3 write your parameters
