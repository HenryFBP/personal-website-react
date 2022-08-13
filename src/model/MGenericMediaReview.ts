export type TRating = {
    lowerBound: any
    upperBound: any
    rating: any
}

export class TRatingUtil {

    /**
     * it just returns a rating bro
     * example:
     *
     * '9/10' -> some TRating object
     */
    static toTRating(s: string): TRating {
        var split = s.split('/')

        return {
            lowerBound: 0,
            upperBound: split[1],
            rating: split[0],
        }
    }

}

export type TGeneralMediaReview = {
    title: string
    author?: string
    url?: string
    datePublished?: Date
    rating?: TRating;
    shortReview?: string
    longReview?: string
    tags?: Array<string>;
}

export class MGenericMediaReview {
    data: TGeneralMediaReview

    constructor(data: TGeneralMediaReview) {
        this.data = data;
    }

    hasShortReview() {
        return !!this.data.shortReview;
    }
}
