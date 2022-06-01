namespace dice {
    /**
     * make a image dice
     */
    //% block
    export function makeImageDice(): void {
         
        basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    }
    /**
     * use images from image 1
     */
    //% block
    export function image1Dice(): void {
        basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    }
    /**
     *  Image 2
     */
    //% block
    export function image2Dice(): void {
        basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    }
    /**
     *  Image 3
     */
    //% block
    export function image3Dice(): void {
        basic.showLeds(`
        . . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . .
        `)
    }
    /**
     *  Image 4
     */
    //% block
    export function image4Dice(): void {
        basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    }
    /**
     *  Image 5
     */
    //% block
    export function image5Dice(): void {
        basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `)
    }
    /**
     *  Last dice image
     */
    //% block
    export function image6Dice(): void {
        
        basic.showLeds(`
        # . . . #
        . . . . .
        # . . . #
        . . . . .
        # . . . #
        `)
    }
}
