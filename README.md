# a-grid

a-grid is a simple grid system for Vue.js. 

This library adds a 12 point grid system built using `flex-box`. It contains five types of media breakpoints that are used for targeting specific screen sizes and orientations.

|Device|Code|Types|Range|
|---|---|---|---|
| Extra small | `xs` | Small to large handsets | < 600px |
| Small | `sm` | small to medium tablet | 600px ~ 960px |
| Medium | `md` | Large tablet to laptop | 960px ~ 1264px |
| Large | `lg` | Desktop | 1264px ~ 1904px |
| Extra large | `xl` | 4k and ultra-wides | > 1904px |


## Usage

The library adds four basic components:

* `a-container` provides the ability to center and horizontally pad your site's contents. You can also use the fluid prop to fully extend the container across all viewport and device sizes.
* `a-row` is a wrapper component for `a-col`. It utilizes flex properties to control the layout and flow of its inner columns.
* `a-col` is a content holder that must be a direct child of `a-row`.
* `a-spacer` allows to leave a flexible space between components.

```html
<template>
  <a-container>
    <a-row no-gutters>
      <a-col
        a-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
        One of three columns
      </a-col>
    </a-row>
  </a-container>
</template>
```

## `a-container`

|Name|Type|Default|Description|
|---|---|---|---|
| `fluid` | boolean | `false` | Removes viewport maxinmun-width size breakpoints. |
| `id` | string | `undefined` | Sets the DOM id on the component. |
| `tag` | string | `div` | Specify a custom tag used on the root element. |


## `a-row`

|Name|Type|Default|Description|
|---|---|---|---|
| `align` | string | `undefined` | Applies the align-items css property. Available options are start, center, end, baseline and stretch. |
| `align-content` | string | `undefined` | Applies the align-content css property. Available options are start, center, end, space-between, space-around and stretch. |
| `align-content-lg` | string | `undefined` | Changes the align-content property on large and greater breakpoints. |
| `align-content-md` | string | `undefined` | Changes the align-content property on medium and greater breakpoints. |
| `align-content-sm` | string | `undefined` | Changes the align-content property on small and greater breakpoints. |
| `align-content-xl` | string | `undefined` | Changes the align-content property on extra large and greater breakpoints. |
| `align-lg` | string | `undefined` | Changes the align-items property on large and greater breakpoints. |
| `align-md` | string | `undefined` | Changes the align-items property on medium and greater breakpoints. |
| `align-sm` | string | `undefined` | Changes the align-items property on small and greater breakpoints. |
| `align-xl` | string | `undefined` | Changes the align-items property on extra large and greater breakpoints. |
| `dense` | boolean | `false` | Reduces the gutter between v-cols. |
| `justify` | string | `undefined` | Applies the justify-content css property. Available options are start, center, end, space-between and space-around. |
| `justify-lg` | string | `undefined` | Changes the justify-content property on large and greater breakpoints. |
| `justify-md` | string | `undefined` | Changes the justify-content property on medium and greater breakpoints. |
| `justify-sm` | string | `undefined` | Changes the justify-content property on small and greater breakpoints. |
| `justify-xl` | string | `undefined` | Changes the justify-content property on extra large and greater breakpoints. |
| `no-gutters` | boolean | `false` | Removes the gutter between v-cols. |
| `tag` | string | `'div'` | Specify a custom tag used on the root element. |


## `a-col`

|Name|Type|Default|Description|
|---|---|---|---|
| `align-self` | string | `undefined` | Applies the align-items css property. Available options are start, center, end, auto, baseline and stretch. |
| `cols` | boolean \| string \| number | `false` | Sets the default number of columns the component extends. Available options are 1 -> 12 and auto. |
| `justify-self` | string | `undefined` | | 
| `lg` | boolean \| string \| number | `false` | Changes the number of columns on large and greater breakpoints. |
| `md` | boolean \| string \| number | `false` | Changes the number of columns on medium and greater breakpoints. |
| `offset` | string \| number | `undefined` | Sets the default offset for the column. |
| `offset-lg` | string \| number | `undefined` | Changes the offset of the component on large and greater breakpoints. |
| `offset-md` | string \| number | `undefined` | Changes the offset of the component on medium and greater breakpoints. |
| `offset-sm` | string \| number | `undefined` | Changes the offset of the component on small and greater breakpoints. |
| `offset-xl` | string \| number | `undefined` | Changes the offset of the component on extra large and greater breakpoints. |
| `order` | string \| number | `undefined` | Sets the default order for the column. |
| `order-lg` | string \| number | `undefined` | Changes the order of the component on large and greater breakpoints. |
| `order-md` | string \| number | `undefined` | Changes the order of the component on medium and greater breakpoints. |
| `order-sm` | string \| number | `undefined` | Changes the order of the component on small and greater breakpoints. |
| `order-xl` | string \| number | `undefined` | Changes the order of the component on extra large and greater breakpoints. |
| `sm` | boolean \| string \| number | `false` | Changes the number of columns on small and greater breakpoints. |
| `tag` | string | `'div'` | Specify a custom tag used on the root element. |
| `xl` | boolean \| string \| number | `false` | Changes the number of columns on extra large and greater breakpoints. 

## `a-spacer`

No additional props.