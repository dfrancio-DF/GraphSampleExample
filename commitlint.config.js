module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 100],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'chore',
        'refactor',
        'docs',
        'revert',
        'style',
        'test',
        'ci',
        'build',
        'perf',
      ],
    ],
  },
  'scope-case': [2, 'always', 'lower-case'],
  'subject-case': [2, 'always', 'lower-case', 'start-case'],
};
