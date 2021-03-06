import gulp = require('gulp');
import {execNodeTask} from '../util/task_helpers';
import {DIST_MATERIAL} from '../constants';

gulp.task('lint', ['tslint', 'stylelint', 'madge']);

/** Task that runs madge to detect circular dependencies. */
gulp.task('madge', ['library:clean-build'], execNodeTask('madge', ['--circular', DIST_MATERIAL]));

/** Task to lint Angular Material's scss stylesheets. */
gulp.task('stylelint', execNodeTask(
  'stylelint', ['src/**/*.scss', '--config', 'stylelint-config.json', '--syntax', 'scss']
));

/** Task to run TSLint against the e2e/ and src/ directories. */
gulp.task('tslint', execNodeTask('tslint', ['-c', 'tslint.json', '+(src|e2e|tools)/**/*.ts']));
