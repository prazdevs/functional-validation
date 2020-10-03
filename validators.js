const isPresent = Validation((key, x) =>
  !!x ? Success(x) : Fail([`${key} needs to be present.`])
);
const isEmail = Validation((key, x) =>
  !!/@/.test(x) ? Success(x) : Fail([`${key} needs to be an email.`])
);

exports.isPreset = isPresent;
exports.isEmail = isEmail;
