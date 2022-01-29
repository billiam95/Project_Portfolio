$(() => {
$(`.carousel-image-home`).eq(0).css(`display`, `block`)

let imageNum = 0;
let imageIndex = $(`#picture-box`).children().length-1;

$(`.next`).on(`click`, () => {
  $(`.carousel-image-home`).eq(imageNum).fadeOut(500)
  $(`.carousel-image-home`).delay(500)
  if (imageNum >= imageIndex)
    {
    imageNum = 0;
    }
  else
    {
    imageNum++;
    }
$(`.carousel-image-home`).eq(imageNum).fadeIn(500)
});

$(`.previous`).on(`click`, () => {
  $(`.carousel-image-home`).eq(imageNum).fadeOut(500)
  $(`.carousel-image-home`).delay(500)
  if (imageNum <= 0)
    {
    imageNum = imageIndex;
    }
  else
    {
    imageNum--;
    }
  $(`.carousel-image-home`).eq(imageNum).fadeIn(500)
})


})
