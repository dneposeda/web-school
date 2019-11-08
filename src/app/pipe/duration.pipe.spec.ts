import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {

    let pipe;
    beforeEach(() => {
        pipe = new DurationPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('duration pipe with H and M', () => {
        expect(pipe.transform(121)).toBe('2 h 1 min');
    });

    it('duration pipe without H', () => {
        expect(pipe.transform(59)).toBe('59 min');
    });
});
