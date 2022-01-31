$(() => {
console.log(`jquery loaded`)
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


// Below I will define the color scheme functions
const offensiveRed = () =>
{
$(`body`).css(`background-image`, `linear-gradient( red,black,red,black)`);
$(`#Reid`).css(`border`,`8px solid red`);
$(`#Reid`).css(`color`,`red`);
$(`#Reid`).css(`font-family`,`'Creepster', cursive`);
$(`a#navlink`).css(`color`,`red`);
$(`a#navlink`).css(`font-family`,`'Creepster', cursive`);
$(`button.button`).css(`background-color`,`black`);
$(`button.button`).css(`color`,`red`);
$(`ion-icon`).css(`color`, `red`);
$(`footer`).css(`background-color`, `black`);
$(`h2.bio-header`).css(`color`,`red`);
$(`h2.bio-header`).css(`font-family`,`'Creepster', cursive`);
$(`article`).children().css(`background-color`,`whitesmoke`);
$(`article`).children().css(`border`,`solid 5px red`);
$(`header.project-header`).css(`border`,`8px solid red`);
$(`header.project-header`).css(`font-family`,`'Creepster', cursive`);
$(`#project-title`).css(`color`,`red`);
$(`#project-title`).css(`font-family`,`'Creepster', cursive`);
$(`h2`).css(`font-family`,`'Creepster', cursive`);
$(`h2.project-header`).css(`color`, `red` );
}

const barbieBoy = () => {
  $(`body`).css(`background`, `#E0218A`);
  $(`#Reid`).css(`border`,`8px solid #E0218A`);
  $(`#Reid`).css(`color`,`#E0218A`);
  $(`#Reid`).css(`font-family`,`'Lobster', cursive`)
  $(`a#navlink`).css(`color`,`#E0218A`)
  $(`a#navlink`).css(`font-family`,`'Lobster', cursive`)
  $(`button.button`).css(`background-color`,`white`);
  $(`button.button`).css(`color`,`#E0218A`);
  $(`ion-icon`).css(`color`, `white`)
  $(`footer`).css(`background-color`, `#F18DBC`)
  $(`h2.bio-header`).css(`color`,`#E0218A`)
  $(`h2.bio-header`).css(`font-family`,`'Lobster', cursive`)
  $(`article`).children().css(`border`,`solid 5px #E0218A`)
  $(`header.project-header`).css(`border`,`8px solid #E0218A`)
  $(`#project-title`).css(`color`,`#E0218A`)
  $(`#project-title`).css(`font-family`,`'Lobster', cursive`)
  $(`h2`).css(`font-family`,`'Lobster', cursive`)
  $(`h2.project-header`).css(`color`, `#E0218A` )
}

const falloutBoy = () => {
  $(`body`).css(`background-image`, `linear-gradient( #56483F,#643B0F)`);
  $(`#Reid`).css(`border`,`8px solid #56483F`);
  $(`#Reid`).css(`color`,`#56483F`);
  $(`#Reid`).css(`font-family`,`'Neonderthaw', cursive` )
  $(`a#navlink`).css(`color`,`#56483F`)
  $(`a#navlink`).css(`font-family`,`'Neonderthaw', cursive` )
  $(`button.button`).css(`background-color`,`white`);
  $(`button.button`).css(`color`,`#56483F`);
  $(`ion-icon`).css(`color`, `white`)
  $(`footer`).css(`background-color`, `#56483F`)
  $(`h2.bio-header`).css(`color`,`#56483F`)
  $(`h2.bio-header`).css(`font-family`,`'Neonderthaw', cursive` )
  $(`article`).children().css(`border`,`solid 5px #56483F`)
  $(`header.project-header`).css(`border`,`8px solid #56483F`)
  $(`#project-title`).css(`color`,`#56483F`)
  $(`#project-title`).css(`font-family`,`'Neonderthaw', cursive` )
  $(`h2`).css(`font-family`,`'Neonderthaw', cursive` )
  $(`h2.project-header`).css(`color`, `#56483F` )
}

const midnightRun = () => {
  $(`body`).css(`background-image`, `linear-gradient( #598ad2,#2e285d,#aa6fa8, #ffada2)`);
  $(`#Reid`).css(`border`,`8px solid #a989f1`);
  $(`#Reid`).css(`color`,`purple`);
  $(`#Reid`).css(`font-family`,`Monoton', cursive`)
  $(`a#navlink`).css(`color`,`purple`)
  $(`a#navlink`).css(`font-family`,`'Monoton', cursive` )
  $(`button.button`).css(`background-color`,`purple`);
  $(`button.button`).css(`color`,`lavender`);
  $(`ion-icon`).css(`color`, `lavender`)
  $(`footer`).css(`background-color`, `#2e285d`)
  $(`h2.bio-header`).css(`color`,`purple`)
  $(`h2.bio-header`).css(`font-family`,`'Monoton', cursive` )
  $(`article`).children().css(`border`,`solid 5px purple`)
  $(`header.project-header`).css(`border`,`8px solid purple`)
  $(`#project-title`).css(`color`,`purple`)
  $(`h1`).css(`font-family`,`'Monoton', cursive` )
  $(`h2`).css(`font-family`,`'Passion One', cursive` )
  $(`h2.project-header`).css(`color`, `purple` )

}


// below I will house the functions in an array
const array = [offensiveRed, barbieBoy, falloutBoy, midnightRun];
let scheme = 0;

$(`.mood`).on(`click`, () => {
  array[scheme]();
  if (scheme < array.length-1) {
    scheme++;
    }
  else {
    scheme-=3;
  }
})

})
