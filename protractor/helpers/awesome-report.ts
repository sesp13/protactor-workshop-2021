import { AwesomeReport } from 'jasmine-awesome-report';

const config = {
  fullPath: 'reports',
  fileName: 'report',
  merge: true,
};

export const awesomeReporter = () => {
  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
};
