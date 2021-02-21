import { ReversePipe } from './reverse.pipe';

//isolated test without angular
describe('ReversePipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new ReversePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('testing transform', () => {
    expect(pipe.transform('hello')).toEqual('olleh');
  });
});
