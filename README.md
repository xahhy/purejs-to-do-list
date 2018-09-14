# Problems
- It looks like you called `mount()` without a global document being loaded. #341 [click me](https://github.com/airbnb/enzyme/issues/341)
> `npm install --save-dev --save-exact jsdom jsdom-global`
>
>  Then : 
>
> `import 'jsdom-global/register'; //at the top of file , even  , before importing react`
>
>  Without need of adding code in beforeEach and afterEach.