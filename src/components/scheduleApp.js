import { StyledBody } from 'baseui/card';
import ScheduleForm from 'components/scheduleForm';
import * as React from 'react';
import Layout from './layout';
import SEO from './seo';

const ScheduleApp = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <StyledBody>
        <ScheduleForm />
      </StyledBody>
    </Layout>
  );
};

export default ScheduleApp;
