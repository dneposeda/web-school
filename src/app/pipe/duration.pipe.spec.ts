import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {

    let pipe;
    beforeEach(() => {
        pipe = new DurationPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('duration pipe', () => {
        expect(pipe.transform(121)).toBe('2h 1 min');
    });
});
