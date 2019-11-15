const chai = require('chai')
const expect = chai.expect
const cipher = require('../src/cipher')

describe('Caesar tests', () => {
    describe('encode', () => {
        it('Encoding of lowercase alphabet letters without any space', () => {
            expect(cipher.encode('abcde', 5)).to.equal('fghij')
        });

        it('Decoding of lowercase alphabet letters without any space', () => {
            expect(cipher.encode('fghij', -5)).to.equal('abcde')
        });

        it('Encoding of lowercase alphabet letters with space', () => {
            expect(cipher.encode('a b c d e', 7)).to.equal("h'i'j'k'l")
        });

        it('Decoding of lowercase alphabet letters with space', () => {
            expect(cipher.encode("h'i'j'k'l", -7)).to.equal('a b c d e')
        });

        it('Encoding of uppercase alphabet letters without any space', () => {
            expect(cipher.encode('ABCDE', 8)).to.equal('IJKLM')
        });

        it('Decoding of uppercase alphabet letters without any space', () => {
            expect(cipher.encode('IJKLM', -8)).to.equal('ABCDE')
        });

        it('Encoding of uppercase alphabet letters with space', () => {
            expect(cipher.encode('A B C D E', 10)).to.equal('K*L*M*N*O')
        });

        it('Decoding of uppercase alphabet letters with space', () => {
            expect(cipher.encode('K*L*M*N*O', -10)).to.equal('A B C D E')
        });

        it('Encoding of a chain of numbers without any space', () => {
            expect(cipher.encode('0123456789', 5)).to.equal('56789:;<=>')
        });

        it('Decoding of a chain of numbers without any space', () => {
            expect(cipher.encode('56789:;<=>', -5)).to.equal('0123456789')
        });

        it('Encoding of a chain of numbers with space', () => {
            expect(cipher.encode('0 1 2 3 4 5 6 7 8 9', 3)).to.equal('3#4#5#6#7#8#9#:#;#<')
        });

        it('Decoding of a chain of numbers with space', () => {
            expect(cipher.encode('3#4#5#6#7#8#9#:#;#<', -3)).to.equal('0 1 2 3 4 5 6 7 8 9')
        });

        it('Encoding of short sentences', () => {
            expect(cipher.encode('Hello!', 7)).to.equal('Olssv(')
        });

        it('Decoding of short sentences', () => {
            expect(cipher.encode('Olssv(', -7)).to.equal('Hello!')
        });

        it('Encoding of sentences with special characters', () => {
            expect(cipher.encode('Como voce esta?', 12)).to.equal('O{y{,#{oq,q !mK')
        });

        it('Decoding of sentences with special characters', () => {
            expect(cipher.encode('O{y{,#{oq,q !mK', -12)).to.equal('Como voce esta?')
        });

        it('Encoding of sentences with offset greater than 26', () => {
            expect(cipher.encode('Vanity is the healthiest thing in life.', 35)).to.equal('y%2-8=C-7C8,)C,)%08,-)78C8,-2+C-2C0-*)Q')
        });

        it('Decoding of sentences with offset greater than 26', () => {
            expect(cipher.encode('y%2-8=C-7C8,)C,)%08,-)78C8,-2+C-2C0-*)Q', -35)).to.equal('Vanity is the healthiest thing in life.')
        });

        it('Encoding of long sentences with lowercase letters', () => {
            expect(cipher.encode('what you wear is how you present yourself to the world, especially today when human contacts go so fast. fashion is instant language.', 5)).to.equal('|mfy%~tz%|jfw%nx%mt|%~tz%uwjxjsy%~tzwxjqk%yt%ymj%|twqi1%jxujhnfqq~%ytif~%|mjs%mzrfs%htsyfhyx%lt%xt%kfxy3%kfxmnts%nx%nsxyfsy%qfslzflj3')
        });

        it('Decoding of long sentences with lowercase letters', () => {
            expect(cipher.encode('|mfy%~tz%|jfw%nx%mt|%~tz%uwjxjsy%~tzwxjqk%yt%ymj%|twqi1%jxujhnfqq~%ytif~%|mjs%mzrfs%htsyfhyx%lt%xt%kfxy3%kfxmnts%nx%nsxyfsy%qfslzflj3', -5)).to.equal('what you wear is how you present yourself to the world, especially today when human contacts go so fast. fashion is instant language.')
        });

        it('Encoding of long sentences with lowercase and uppercase letters', () => {
            expect(cipher.encode('What You Wear Is How You Present Yourself To The World, Especially Today When Human Contacts Go So Fast. Fashion Is Instant Language.', 40)).to.equal(' 1*=H"8>H .*;Hq<Hp8@H"8>Hx;.<.7=H"8>;<.5/H|8H|1.H 8;5-THm<9.,2*55BH|8-*BH 1.7Hp>6*7Hk87=*,=<Ho8H{8Hn*<=VHn*<1287Hq<Hq7<=*7=Ht*70>*0.V');
        });

        it('Decoding of long sentences with lowercase and uppercase letters', () => {
            expect(cipher.encode(' 1*=H"8>H .*;Hq<Hp8@H"8>Hx;.<.7=H"8>;<.5/H|8H|1.H 8;5-THm<9.,2*55BH|8-*BH 1.7Hp>6*7Hk87=*,=<Ho8H{8Hn*<=VHn*<1287Hq<Hq7<=*7=Ht*70>*0.V', -40)).to.equal('What You Wear Is How You Present Yourself To The World, Especially Today When Human Contacts Go So Fast. Fashion Is Instant Language.')
        });

        it('Encoding of long sentences with uppercase letters', () => {
            expect(cipher.encode('WHAT YOU WEAR IS HOW YOU PRESENT YOURSELF TO THE WORLD, ESPECIALLY TODAY WHEN HUMAN CONTACTS GO SO FAST. FASHION IS INSTANT LANGUAGE.', 18)).to.equal('iZSf2kag2iWSd2[e2Zai2kag2bdWeW`f2kagdeW^X2fa2fZW2iad^V>2WebWU[S^^k2faVSk2iZW`2Zg_S`2Ua`fSUfe2Ya2ea2XSef@2XSeZ[a`2[e2[`efS`f2^S`YgSYW@')
        });

        it('Decoding of long sentences with uppercase letters', () => {
            expect(cipher.encode('iZSf2kag2iWSd2[e2Zai2kag2bdWeW`f2kagdeW^X2fa2fZW2iad^V>2WebWU[S^^k2faVSk2iZW`2Zg_S`2Ua`fSUfe2Ya2ea2XSef@2XSeZ[a`2[e2[`efS`f2^S`YgSYW@', -18)).to.equal('WHAT YOU WEAR IS HOW YOU PRESENT YOURSELF TO THE WORLD, ESPECIALLY TODAY WHEN HUMAN CONTACTS GO SO FAST. FASHION IS INSTANT LANGUAGE.')
        });

        it('Encoding of sentences with much space', () => {
            expect(cipher.encode('Fashion      is      made      to      become      unfashionable.', 10)).to.equal('Pk}rsyx******s}******wkno******~y******lomywo****** xpk}rsyxklvo8')
        });

        it('Decoding of sentences with much space', () => {
            expect(cipher.encode('Pk}rsyx******s}******wkno******~y******lomywo****** xpk}rsyxklvo8', -10)).to.equal('Fashion      is      made      to      become      unfashionable.')
        });
    });
});