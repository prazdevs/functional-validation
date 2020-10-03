const Success = x => ({
  isFail: false,
  x,
  fold: (_, g) => g(x),
  concat: other => (other.isFail ? other : Success(x)),
});

const Fail = x => ({
  isFail: true,
  x,
  fold: (f, _) => f(x),
  concat: other => (other.isFail ? Fail(x.concat(other.x)) : Fail(x)),
});

const Validation = run => ({
  run,
  concat: other =>
    Validation((key, x) => run(key, x).concat(other.run(key, x))),
});

exports.Success = Success;
exports.Fail = Fail;
exports.Validation = Validation;
