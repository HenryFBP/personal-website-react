import {MGenericMediaReview, TGeneralMediaReview} from "./MGenericMediaReview";

import {SAMPLE_BOOKS} from "../data/sampleBooks";
import {Card, Container} from "react-bootstrap";
import {Config} from "../Config";

export type TBookReview = TGeneralMediaReview & {
    isbn9?: string;
    isbn13?: string;
}

export class MBookReview extends MGenericMediaReview {

    data: TBookReview;

    constructor(data: TBookReview) {
        super(data);
        this.data = data;
    }

    hasBothISBNs(): boolean {
        return (this.hasIsbn9() && this.hasIsbn13())
    }

    static from_json(param: TBookReview) {
        return new MBookReview(param)
    }

    static loadExampleObjects(): MBookReview[] {

        let books: MBookReview[] = []

        for (let index in SAMPLE_BOOKS) {
            const samplebook = SAMPLE_BOOKS[index];

            books.push(MBookReview.from_json(samplebook))
        }

        return books
    }

    renderBothISBNs() {
        return <Container>
            {this.hasIsbn9() ? this.renderISBN9() : <></>}
            {this.hasIsbn13() ? this.renderISBN13() : <></>}
        </Container>
    }

    renderISBN9() {
        return <>
            <Card.Link href={Config.ISBN_URL + this.data.isbn9}>
                ISBN-9: {this.data.isbn9}
            </Card.Link>
        </>;
    }

    renderISBN13() {
        return <>
            <Card.Link href={Config.ISBN_URL + this.data.isbn13}>
                ISBN-13: {this.data.isbn13}
            </Card.Link>
        </>
    }

    hasIsbn9() {
        return !!this.data.isbn9;
    }

    hasIsbn13() {
        return !!this.data.isbn13;
    }

}