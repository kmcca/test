import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '25d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '8b5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'ff5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'a3d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'd75'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '866'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'bec'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'd13'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'b44'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'a3c'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'e82'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'dbb'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'fb1'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'a17'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'b3e'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '865'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '8b4'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd1e'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'b54'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd7d'),
    routes: [
      {
        path: '/docs/admin/',
        component: ComponentCreator('/docs/admin/', '34e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/managing_users_teams/',
        component: ComponentCreator('/docs/admin/managing_users_teams/', 'ab2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/managing_users_teams/about_veracode_accounts',
        component: ComponentCreator('/docs/admin/managing_users_teams/about_veracode_accounts', 'd5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/managing_users_teams/administering_veracode_account',
        component: ComponentCreator('/docs/admin/managing_users_teams/administering_veracode_account', '063'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/managing_users_teams/managing_teams/',
        component: ComponentCreator('/docs/admin/managing_users_teams/managing_teams/', '31a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/managing_users_teams/managing_teams/create_team_platform',
        component: ComponentCreator('/docs/admin/managing_users_teams/managing_teams/create_team_platform', '5f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/managing_users_teams/managing_teams/delete_team_platform',
        component: ComponentCreator('/docs/admin/managing_users_teams/managing_teams/delete_team_platform', '463'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/managing_users_teams/managing_teams/update_team_platform',
        component: ComponentCreator('/docs/admin/managing_users_teams/managing_teams/update_team_platform', 'f22'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/managing_users_teams/managing_teams/video_create_manage_users_teams',
        component: ComponentCreator('/docs/admin/managing_users_teams/managing_teams/video_create_manage_users_teams', '863'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/managing_users_teams/managing_users/',
        component: ComponentCreator('/docs/admin/managing_users_teams/managing_users/', '97b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/managing_users_teams/managing_users/create_new_user_platform',
        component: ComponentCreator('/docs/admin/managing_users_teams/managing_users/create_new_user_platform', 'cf4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/managing_users_teams/managing_users/managing_api_users',
        component: ComponentCreator('/docs/admin/managing_users_teams/managing_users/managing_api_users', '15b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/managing_users_teams/managing_users/remove_user_platform',
        component: ComponentCreator('/docs/admin/managing_users_teams/managing_users/remove_user_platform', '8de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/managing_users_teams/managing_users/request_user_email_verification',
        component: ComponentCreator('/docs/admin/managing_users_teams/managing_users/request_user_email_verification', '7d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/managing_users_teams/managing_users/reset_user_password',
        component: ComponentCreator('/docs/admin/managing_users_teams/managing_users/reset_user_password', '82d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/managing_users_teams/managing_users/restrict_user_ip_range',
        component: ComponentCreator('/docs/admin/managing_users_teams/managing_users/restrict_user_ip_range', 'a89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/managing_users_teams/managing_users/update_user_platform',
        component: ComponentCreator('/docs/admin/managing_users_teams/managing_users/update_user_platform', 'f24'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/managing_users_teams/managing_users/video_create_manage_api_users',
        component: ComponentCreator('/docs/admin/managing_users_teams/managing_users/video_create_manage_api_users', 'd5c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/managing_users_teams/managing_users/view_activity_log',
        component: ComponentCreator('/docs/admin/managing_users_teams/managing_users/view_activity_log', '8ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/',
        component: ComponentCreator('/docs/admin/platform_administration/', '3da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/about_email_notifications',
        component: ComponentCreator('/docs/admin/platform_administration/about_email_notifications', '933'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/access_license_consumption_reports',
        component: ComponentCreator('/docs/admin/platform_administration/access_license_consumption_reports', 'a40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/add_applications_bulk',
        component: ComponentCreator('/docs/admin/platform_administration/add_applications_bulk', '6ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/add_business_unit',
        component: ComponentCreator('/docs/admin/platform_administration/add_business_unit', '8cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/application_profile_characters',
        component: ComponentCreator('/docs/admin/platform_administration/application_profile_characters', 'cfe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/assign_application_teams',
        component: ComponentCreator('/docs/admin/platform_administration/assign_application_teams', '9ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/checking_status_veracode_services/',
        component: ComponentCreator('/docs/admin/platform_administration/checking_status_veracode_services/', 'ff8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/checking_status_veracode_services/calling_status_services_endpoint',
        component: ComponentCreator('/docs/admin/platform_administration/checking_status_veracode_services/calling_status_services_endpoint', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/configure_optional_notifications/',
        component: ComponentCreator('/docs/admin/platform_administration/configure_optional_notifications/', '075'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/configure_optional_notifications/optional_policy_notifications',
        component: ComponentCreator('/docs/admin/platform_administration/configure_optional_notifications/optional_policy_notifications', 'fa7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/configure_optional_notifications/optional_scan_notifications',
        component: ComponentCreator('/docs/admin/platform_administration/configure_optional_notifications/optional_scan_notifications', '5ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/create_new_application_profile',
        component: ComponentCreator('/docs/admin/platform_administration/create_new_application_profile', '1b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/custom_cleanser_administration',
        component: ComponentCreator('/docs/admin/platform_administration/custom_cleanser_administration', '81e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/delete_application_profile',
        component: ComponentCreator('/docs/admin/platform_administration/delete_application_profile', '15c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/delete_business_unit',
        component: ComponentCreator('/docs/admin/platform_administration/delete_business_unit', '114'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/edit_application_profile',
        component: ComponentCreator('/docs/admin/platform_administration/edit_application_profile', '0aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/edit_business_unit',
        component: ComponentCreator('/docs/admin/platform_administration/edit_business_unit', '186'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/managing_application_profiles',
        component: ComponentCreator('/docs/admin/platform_administration/managing_application_profiles', '265'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/remove_email_veracode_blocklist',
        component: ComponentCreator('/docs/admin/platform_administration/remove_email_veracode_blocklist', '95c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/turn_off_optional_notifications',
        component: ComponentCreator('/docs/admin/platform_administration/turn_off_optional_notifications', '05b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/understanding_license_consumption_reports',
        component: ComponentCreator('/docs/admin/platform_administration/understanding_license_consumption_reports', '947'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/video_create_new_application_profile',
        component: ComponentCreator('/docs/admin/platform_administration/video_create_new_application_profile', '3af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/platform_administration/view_application_profile',
        component: ComponentCreator('/docs/admin/platform_administration/view_application_profile', 'ed4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/signing_on/',
        component: ComponentCreator('/docs/admin/signing_on/', '2ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/signing_on/common_roles_user_accounts',
        component: ComponentCreator('/docs/admin/signing_on/common_roles_user_accounts', '7f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/signing_on/jit_provisioning_migration/',
        component: ComponentCreator('/docs/admin/signing_on/jit_provisioning_migration/', 'bf8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/signing_on/jit_provisioning_migration/migrate_to_jit_provisioning_sso',
        component: ComponentCreator('/docs/admin/signing_on/jit_provisioning_migration/migrate_to_jit_provisioning_sso', 'a73'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/signing_on/understanding_api_roles',
        component: ComponentCreator('/docs/admin/signing_on/understanding_api_roles', '6ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/signing_on/understanding_user_roles_permissions',
        component: ComponentCreator('/docs/admin/signing_on/understanding_user_roles_permissions', 'cfa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/signing_on/using_saml_self_registration_legacy/',
        component: ComponentCreator('/docs/admin/signing_on/using_saml_self_registration_legacy/', '5c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/signing_on/using_saml_self_registration_legacy/configure_saml_self_registration_legacy',
        component: ComponentCreator('/docs/admin/signing_on/using_saml_self_registration_legacy/configure_saml_self_registration_legacy', 'a14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/signing_on/using_saml_self_registration/',
        component: ComponentCreator('/docs/admin/signing_on/using_saml_self_registration/', '33c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/signing_on/using_saml_self_registration/configure_saml_self_registration',
        component: ComponentCreator('/docs/admin/signing_on/using_saml_self_registration/configure_saml_self_registration', '5bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/signing_on/using_sso_saml_legacy/',
        component: ComponentCreator('/docs/admin/signing_on/using_sso_saml_legacy/', '196'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/signing_on/using_sso_saml_legacy/configuring_organization_account_saml_legacy',
        component: ComponentCreator('/docs/admin/signing_on/using_sso_saml_legacy/configuring_organization_account_saml_legacy', 'd2f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/signing_on/using_sso_saml_legacy/configuring_organization_idp_saml_legacy',
        component: ComponentCreator('/docs/admin/signing_on/using_sso_saml_legacy/configuring_organization_idp_saml_legacy', '236'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/signing_on/using_sso_saml_legacy/configuring_user_saml_access_legacy',
        component: ComponentCreator('/docs/admin/signing_on/using_sso_saml_legacy/configuring_user_saml_access_legacy', '05a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/signing_on/using_sso_saml/',
        component: ComponentCreator('/docs/admin/signing_on/using_sso_saml/', '6c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/signing_on/using_sso_saml/configuring_organization_account_saml',
        component: ComponentCreator('/docs/admin/signing_on/using_sso_saml/configuring_organization_account_saml', '68a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/signing_on/using_sso_saml/configuring_organization_idp_saml',
        component: ComponentCreator('/docs/admin/signing_on/using_sso_saml/configuring_organization_idp_saml', 'a1d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin/signing_on/using_sso_saml/configuring_user_saml_access',
        component: ComponentCreator('/docs/admin/signing_on/using_sso_saml/configuring_user_saml_access', '0e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Analytics/',
        component: ComponentCreator('/docs/Analytics/', '096'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Analytics/about_dashboards',
        component: ComponentCreator('/docs/Analytics/about_dashboards', '623'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Analytics/analytics_FAQ',
        component: ComponentCreator('/docs/Analytics/analytics_FAQ', 'ffe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Analytics/customize_dashboards',
        component: ComponentCreator('/docs/Analytics/customize_dashboards', '3f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Analytics/customize_visualizations/',
        component: ComponentCreator('/docs/Analytics/customize_visualizations/', '580'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Analytics/customize_visualizations/analytics_video_organizations_dashboards',
        component: ComponentCreator('/docs/Analytics/customize_visualizations/analytics_video_organizations_dashboards', 'a71'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Analytics/save_dashboards/',
        component: ComponentCreator('/docs/Analytics/save_dashboards/', '0e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Analytics/save_dashboards/analytics_embed_video_personal_dashboards',
        component: ComponentCreator('/docs/Analytics/save_dashboards/analytics_embed_video_personal_dashboards', '6c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Analytics/using_explore/',
        component: ComponentCreator('/docs/Analytics/using_explore/', 'ec7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Analytics/using_explore/applications_explore',
        component: ComponentCreator('/docs/Analytics/using_explore/applications_explore', '522'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Analytics/using_explore/findings_explore',
        component: ComponentCreator('/docs/Analytics/using_explore/findings_explore', 'e2b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Analytics/using_explore/greenlight_explore',
        component: ComponentCreator('/docs/Analytics/using_explore/greenlight_explore', 'e23'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Analytics/using_explore/sca_agent_based_issues',
        component: ComponentCreator('/docs/Analytics/using_explore/sca_agent_based_issues', '618'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Analytics/using_explore/sca_agent_based_scans',
        component: ComponentCreator('/docs/Analytics/using_explore/sca_agent_based_scans', '3ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Analytics/using_explore/scans_explore',
        component: ComponentCreator('/docs/Analytics/using_explore/scans_explore', '062'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Analytics/using_explore/users_explore',
        component: ComponentCreator('/docs/Analytics/using_explore/users_explore', 'd86'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/',
        component: ComponentCreator('/docs/apis/', '33f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/about_apis/',
        component: ComponentCreator('/docs/apis/about_apis/', '2db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/about_apis/about_api_access',
        component: ComponentCreator('/docs/apis/about_apis/about_api_access', '797'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/about_apis/api_prerequisites',
        component: ComponentCreator('/docs/apis/about_apis/api_prerequisites', '0d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/about_apis/api_rate_limiting',
        component: ComponentCreator('/docs/apis/about_apis/api_rate_limiting', 'a51'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_best_practices/',
        component: ComponentCreator('/docs/apis/api_best_practices/', '4b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/',
        component: ComponentCreator('/docs/apis/api_wrappers/', '897'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/install_csharp_wrapper',
        component: ComponentCreator('/docs/apis/api_wrappers/install_csharp_wrapper', '43f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/setup_java_wrapper/',
        component: ComponentCreator('/docs/apis/api_wrappers/setup_java_wrapper/', 'e5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/setup_java_wrapper/java_wrapper_config_params',
        component: ComponentCreator('/docs/apis/api_wrappers/setup_java_wrapper/java_wrapper_config_params', '0e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/setup_java_wrapper/java_wrapper_verify_authenticity',
        component: ComponentCreator('/docs/apis/api_wrappers/setup_java_wrapper/java_wrapper_verify_authenticity', '8ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/use_wrappers_library/',
        component: ComponentCreator('/docs/apis/api_wrappers/use_wrappers_library/', 'dca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/use_wrappers_library/reference_csharp_wrapper_visual_studio',
        component: ComponentCreator('/docs/apis/api_wrappers/use_wrappers_library/reference_csharp_wrapper_visual_studio', '60a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/use_wrappers_library/reference_java_wrapper_eclipse',
        component: ComponentCreator('/docs/apis/api_wrappers/use_wrappers_library/reference_java_wrapper_eclipse', 'fc7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/wrappers_command_line/',
        component: ComponentCreator('/docs/apis/api_wrappers/wrappers_command_line/', '5f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/wrappers_command_line/api_wrapper_parameters',
        component: ComponentCreator('/docs/apis/api_wrappers/wrappers_command_line/api_wrapper_parameters', 'a04'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/wrappers_command_line/api_wrapper_run_command_line',
        component: ComponentCreator('/docs/apis/api_wrappers/wrappers_command_line/api_wrapper_run_command_line', 'e50'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/wrappers_composite_actions/',
        component: ComponentCreator('/docs/apis/api_wrappers/wrappers_composite_actions/', 'c43'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/wrappers_composite_actions/alldetailedreports',
        component: ComponentCreator('/docs/apis/api_wrappers/wrappers_composite_actions/alldetailedreports', 'b63'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/wrappers_composite_actions/passfail',
        component: ComponentCreator('/docs/apis/api_wrappers/wrappers_composite_actions/passfail', '993'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/wrappers_composite_actions/switchtosaml',
        component: ComponentCreator('/docs/apis/api_wrappers/wrappers_composite_actions/switchtosaml', '461'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/wrappers_composite_actions/uploadandscan',
        component: ComponentCreator('/docs/apis/api_wrappers/wrappers_composite_actions/uploadandscan', '2f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/wrappers_composite_actions/uploadandscanbyappid',
        component: ComponentCreator('/docs/apis/api_wrappers/wrappers_composite_actions/uploadandscanbyappid', 'dcd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/wrappers_use_simple_actions',
        component: ComponentCreator('/docs/apis/api_wrappers/wrappers_use_simple_actions', '207'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/api_wrappers/xml_wrappers_creds_file',
        component: ComponentCreator('/docs/apis/api_wrappers/xml_wrappers_creds_file', 'a0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/apis_hmac_auth/',
        component: ComponentCreator('/docs/apis/apis_hmac_auth/', 'f93'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/apis_hmac_auth/configure_java_hmac/',
        component: ComponentCreator('/docs/apis/apis_hmac_auth/configure_java_hmac/', '306'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/apis_hmac_auth/configure_java_hmac/hmac_signing_example_java',
        component: ComponentCreator('/docs/apis/apis_hmac_auth/configure_java_hmac/hmac_signing_example_java', '8ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/apis_hmac_auth/configure_python_hmac/',
        component: ComponentCreator('/docs/apis/apis_hmac_auth/configure_python_hmac/', '97d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/apis_hmac_auth/configure_python_hmac/hmac_signing_example_python',
        component: ComponentCreator('/docs/apis/apis_hmac_auth/configure_python_hmac/hmac_signing_example_python', 'aec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/apis_hmac_auth/configure_python_hmac/hmac_use_httpie_with_python',
        component: ComponentCreator('/docs/apis/apis_hmac_auth/configure_python_hmac/hmac_use_httpie_with_python', 'f06'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/apis_hmac_auth/configure_python_hmac/prepare_ubuntu_for_python',
        component: ComponentCreator('/docs/apis/apis_hmac_auth/configure_python_hmac/prepare_ubuntu_for_python', 'c80'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/apis_hmac_auth/hmac_signing_example_csharp',
        component: ComponentCreator('/docs/apis/apis_hmac_auth/hmac_signing_example_csharp', '65d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/apis_hmac_auth/hmac_troubleshoot',
        component: ComponentCreator('/docs/apis/apis_hmac_auth/hmac_troubleshoot', 'd24'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/',
        component: ComponentCreator('/docs/apis/rest_apis/', 'bed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/annotations_rest_api/',
        component: ComponentCreator('/docs/apis/rest_apis/annotations_rest_api/', 'a0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/annotations_rest_api/annotations_api_approve_mitigation',
        component: ComponentCreator('/docs/apis/rest_apis/annotations_rest_api/annotations_api_approve_mitigation', '040'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/annotations_rest_api/annotations_api_comment_on_findings',
        component: ComponentCreator('/docs/apis/rest_apis/annotations_rest_api/annotations_api_comment_on_findings', '6af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/annotations_rest_api/annotations_api_propose_mitigation',
        component: ComponentCreator('/docs/apis/rest_apis/annotations_rest_api/annotations_api_propose_mitigation', 'cf1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/annotations_rest_api/annotations_api_reject_mitigation',
        component: ComponentCreator('/docs/apis/rest_apis/annotations_rest_api/annotations_api_reject_mitigation', 'd89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/applications_rest_api/',
        component: ComponentCreator('/docs/apis/rest_apis/applications_rest_api/', 'b5b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/applications_rest_api/applications_api_create',
        component: ComponentCreator('/docs/apis/rest_apis/applications_rest_api/applications_api_create', '14b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/applications_rest_api/applications_api_create_assign_team',
        component: ComponentCreator('/docs/apis/rest_apis/applications_rest_api/applications_api_create_assign_team', 'ad3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/applications_rest_api/applications_api_delete',
        component: ComponentCreator('/docs/apis/rest_apis/applications_rest_api/applications_api_delete', 'd2b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/applications_rest_api/applications_api_list',
        component: ComponentCreator('/docs/apis/rest_apis/applications_rest_api/applications_api_list', '2a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/applications_rest_api/applications_api_list_any_tag',
        component: ComponentCreator('/docs/apis/rest_apis/applications_rest_api/applications_api_list_any_tag', '22a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/applications_rest_api/applications_api_list_bu',
        component: ComponentCreator('/docs/apis/rest_apis/applications_rest_api/applications_api_list_bu', 'c31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/applications_rest_api/applications_api_list_compliance',
        component: ComponentCreator('/docs/apis/rest_apis/applications_rest_api/applications_api_list_compliance', '4ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/applications_rest_api/applications_api_list_custom_field',
        component: ComponentCreator('/docs/apis/rest_apis/applications_rest_api/applications_api_list_custom_field', 'c8a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/applications_rest_api/applications_api_list_eval_date',
        component: ComponentCreator('/docs/apis/rest_apis/applications_rest_api/applications_api_list_eval_date', 'e33'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/applications_rest_api/applications_api_list_modified_date',
        component: ComponentCreator('/docs/apis/rest_apis/applications_rest_api/applications_api_list_modified_date', '130'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/applications_rest_api/applications_api_list_sandboxes',
        component: ComponentCreator('/docs/apis/rest_apis/applications_rest_api/applications_api_list_sandboxes', 'b7d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/applications_rest_api/applications_api_list_scan_type',
        component: ComponentCreator('/docs/apis/rest_apis/applications_rest_api/applications_api_list_scan_type', '68f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/applications_rest_api/applications_api_list_tag',
        component: ComponentCreator('/docs/apis/rest_apis/applications_rest_api/applications_api_list_tag', '926'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/applications_rest_api/applications_api_update',
        component: ComponentCreator('/docs/apis/rest_apis/applications_rest_api/applications_api_update', 'cdc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/applications_rest_api/applications_api_view_details',
        component: ComponentCreator('/docs/apis/rest_apis/applications_rest_api/applications_api_view_details', '6d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dev_sandbox_rest_api/',
        component: ComponentCreator('/docs/apis/rest_apis/dev_sandbox_rest_api/', '622'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dev_sandbox_rest_api/sandbox_api_create',
        component: ComponentCreator('/docs/apis/rest_apis/dev_sandbox_rest_api/sandbox_api_create', 'ba6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dev_sandbox_rest_api/sandbox_api_delete',
        component: ComponentCreator('/docs/apis/rest_apis/dev_sandbox_rest_api/sandbox_api_delete', 'c14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dev_sandbox_rest_api/sandbox_api_promote',
        component: ComponentCreator('/docs/apis/rest_apis/dev_sandbox_rest_api/sandbox_api_promote', '634'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dev_sandbox_rest_api/sandbox_api_update',
        component: ComponentCreator('/docs/apis/rest_apis/dev_sandbox_rest_api/sandbox_api_update', '611'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dynamic_rest_apis/',
        component: ComponentCreator('/docs/apis/rest_apis/dynamic_rest_apis/', '209'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_add_url',
        component: ComponentCreator('/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_add_url', '927'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_configure_ism',
        component: ComponentCreator('/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_configure_ism', 'a97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_create_authenticated',
        component: ComponentCreator('/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_create_authenticated', 'af2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_create_creds_var_login_script',
        component: ComponentCreator('/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_create_creds_var_login_script', '669'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_create_multiple_urls',
        component: ComponentCreator('/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_create_multiple_urls', 'e91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_create_single_url',
        component: ComponentCreator('/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_create_single_url', '2b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_create_single_url_with_prescan',
        component: ComponentCreator('/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_create_single_url_with_prescan', '00d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_create_with_crawl_script',
        component: ComponentCreator('/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_create_with_crawl_script', '15e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_create_with_useragent_blocklisted',
        component: ComponentCreator('/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_create_with_useragent_blocklisted', '9d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_edit_schedule',
        component: ComponentCreator('/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_edit_schedule', 'de3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_link_results',
        component: ComponentCreator('/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_link_results', '96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_pause_resume_schedule',
        component: ComponentCreator('/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_pause_resume_schedule', '7cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_recurring_schedule',
        component: ComponentCreator('/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_recurring_schedule', '7a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_remove_url',
        component: ComponentCreator('/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_remove_url', '90e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_unlink_results',
        component: ComponentCreator('/docs/apis/rest_apis/dynamic_rest_apis/dynamic_api_unlink_results', 'd7f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/elearning_rest_apis/',
        component: ComponentCreator('/docs/apis/rest_apis/elearning_rest_apis/', '3a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/elearning_rest_apis/elearning_api_available_courses',
        component: ComponentCreator('/docs/apis/rest_apis/elearning_rest_apis/elearning_api_available_courses', 'ca4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/elearning_rest_apis/elearning_api_course_by_id',
        component: ComponentCreator('/docs/apis/rest_apis/elearning_rest_apis/elearning_api_course_by_id', 'a91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/elearning_rest_apis/elearning_api_learner_by_id',
        component: ComponentCreator('/docs/apis/rest_apis/elearning_rest_apis/elearning_api_learner_by_id', '9a7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/elearning_rest_apis/elearning_api_list_usersI',
        component: ComponentCreator('/docs/apis/rest_apis/elearning_rest_apis/elearning_api_list_usersI', '0bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/elearning_rest_apis/elearning_api_progress_reports',
        component: ComponentCreator('/docs/apis/rest_apis/elearning_rest_apis/elearning_api_progress_reports', '07f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/findings_rest_apis/',
        component: ComponentCreator('/docs/apis/rest_apis/findings_rest_apis/', 'cb9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/findings_rest_apis/findings_api_examples',
        component: ComponentCreator('/docs/apis/rest_apis/findings_rest_apis/findings_api_examples', '211'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/findings_rest_apis/using_dynamic_flaw_endpoint',
        component: ComponentCreator('/docs/apis/rest_apis/findings_rest_apis/using_dynamic_flaw_endpoint', '5e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/findings_rest_apis/using_static_flaw_data_path_endpoint',
        component: ComponentCreator('/docs/apis/rest_apis/findings_rest_apis/using_static_flaw_data_path_endpoint', '2b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/greenlight_rest_apis/',
        component: ComponentCreator('/docs/apis/rest_apis/greenlight_rest_apis/', '8e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/healthcheck_rest_apis/',
        component: ComponentCreator('/docs/apis/rest_apis/healthcheck_rest_apis/', '56e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/', 'd0a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_add_team_to_bu',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_add_team_to_bu', 'b4c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_add_users_to_team',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_add_users_to_team', 'cb5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_create_bu',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_create_bu', 'e53'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_create_human',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_create_human', 'd5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_create_service_account/',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_create_service_account/', 'c56'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_create_service_account/video_create_api_service_accounts_identity_api',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_create_service_account/video_create_api_service_accounts_identity_api', 'ce5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_create_team',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_create_team', 'bf0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_delete_bu',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_delete_bu', 'f14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_delete_team',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_delete_team', 'e31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_delete_user',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_delete_user', 'e44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_filter_users',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_filter_users', '76b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_generate_api_creds',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_generate_api_creds', 'b40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_list_all_roles_organization',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_list_all_roles_organization', '6fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_list_bu',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_list_bu', 'e44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_list_teams',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_list_teams', '7e3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_list_users',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_list_users', 'a35'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_revoke_api_creds',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_revoke_api_creds', '08b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_search_users',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_search_users', '7fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_update_bu',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_update_bu', 'fcc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_update_team',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_update_team', '4e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_update_user',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_update_user', 'ec9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_update_user_mfa',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_update_user_mfa', 'ddc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_view_bu_details',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_view_bu_details', '8dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_view_expired_api_creds',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_view_expired_api_creds', '275'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/identity_rest_api/identity_api_view_team_details',
        component: ComponentCreator('/docs/apis/rest_apis/identity_rest_api/identity_api_view_team_details', 'eb7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/mpt_rest_api',
        component: ComponentCreator('/docs/apis/rest_apis/mpt_rest_api', 'dc9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/pipeline_scan_rest_apis/',
        component: ComponentCreator('/docs/apis/rest_apis/pipeline_scan_rest_apis/', '52a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_api_cancel',
        component: ComponentCreator('/docs/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_api_cancel', '120'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_api_configure',
        component: ComponentCreator('/docs/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_api_configure', '80a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_api_set_timeout',
        component: ComponentCreator('/docs/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_api_set_timeout', '68b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_api_start',
        component: ComponentCreator('/docs/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_api_start', 'd91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_api_upload_segments',
        component: ComponentCreator('/docs/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_api_upload_segments', '026'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_api_view_details',
        component: ComponentCreator('/docs/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_api_view_details', '0f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_api_view_findings',
        component: ComponentCreator('/docs/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_api_view_findings', '04a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_rest_apis_prepare/',
        component: ComponentCreator('/docs/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_rest_apis_prepare/', '89e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_rest_apis_prepare/pipeline_scan_api_divide_files',
        component: ComponentCreator('/docs/apis/rest_apis/pipeline_scan_rest_apis/pipeline_scan_rest_apis_prepare/pipeline_scan_api_divide_files', 'a15'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/policy_rest_apis/',
        component: ComponentCreator('/docs/apis/rest_apis/policy_rest_apis/', 'c42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/policy_rest_apis/policy_api_create',
        component: ComponentCreator('/docs/apis/rest_apis/policy_rest_apis/policy_api_create', 'e34'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/policy_rest_apis/policy_api_delete',
        component: ComponentCreator('/docs/apis/rest_apis/policy_rest_apis/policy_api_delete', '0c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/policy_rest_apis/policy_api_rules_properties',
        component: ComponentCreator('/docs/apis/rest_apis/policy_rest_apis/policy_api_rules_properties', '542'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/policy_rest_apis/policy_api_update',
        component: ComponentCreator('/docs/apis/rest_apis/policy_rest_apis/policy_api_update', '495'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/sca_rest_apis/',
        component: ComponentCreator('/docs/apis/rest_apis/sca_rest_apis/', '023'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/sca_rest_apis/about_data_deduplication_sboms_linked',
        component: ComponentCreator('/docs/apis/rest_apis/sca_rest_apis/about_data_deduplication_sboms_linked', '823'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/sca_rest_apis/sca_rest_api_generate_sbom',
        component: ComponentCreator('/docs/apis/rest_apis/sca_rest_apis/sca_rest_api_generate_sbom', '98d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/sca_rest_apis/sca_rest_api_generate_sbom_agent',
        component: ComponentCreator('/docs/apis/rest_apis/sca_rest_apis/sca_rest_api_generate_sbom_agent', 'e37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/sca_rest_apis/sca_rest_api_srclr_creds',
        component: ComponentCreator('/docs/apis/rest_apis/sca_rest_apis/sca_rest_api_srclr_creds', '1cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/sec_labs_rest_apis/',
        component: ComponentCreator('/docs/apis/rest_apis/sec_labs_rest_apis/', '153'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/summary_report_rest_api/',
        component: ComponentCreator('/docs/apis/rest_apis/summary_report_rest_api/', '9ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/rest_apis/summary_report_rest_api/summary_report_api_generate',
        component: ComponentCreator('/docs/apis/rest_apis/summary_report_rest_api/summary_report_api_generate', 'b95'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/',
        component: ComponentCreator('/docs/apis/xml_apis/', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/admin_xml_apis/',
        component: ComponentCreator('/docs/apis/xml_apis/admin_xml_apis/', 'b49'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/admin_xml_apis/admin_xml_apis_quickref',
        component: ComponentCreator('/docs/apis/xml_apis/admin_xml_apis/admin_xml_apis_quickref', '3d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/admin_xml_apis/createteam_do',
        component: ComponentCreator('/docs/apis/xml_apis/admin_xml_apis/createteam_do', 'a00'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/admin_xml_apis/createuser_do',
        component: ComponentCreator('/docs/apis/xml_apis/admin_xml_apis/createuser_do', '3f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/admin_xml_apis/deleteteam_do',
        component: ComponentCreator('/docs/apis/xml_apis/admin_xml_apis/deleteteam_do', '822'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/admin_xml_apis/deleteuser_do',
        component: ComponentCreator('/docs/apis/xml_apis/admin_xml_apis/deleteuser_do', 'ff4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/admin_xml_apis/getcurriculumlist_do',
        component: ComponentCreator('/docs/apis/xml_apis/admin_xml_apis/getcurriculumlist_do', '2bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/admin_xml_apis/getmaintenancescheduleinfo_do',
        component: ComponentCreator('/docs/apis/xml_apis/admin_xml_apis/getmaintenancescheduleinfo_do', '15a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/admin_xml_apis/getteaminfo_do',
        component: ComponentCreator('/docs/apis/xml_apis/admin_xml_apis/getteaminfo_do', '277'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/admin_xml_apis/getteamlist_do',
        component: ComponentCreator('/docs/apis/xml_apis/admin_xml_apis/getteamlist_do', 'b59'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/admin_xml_apis/gettracklist_do',
        component: ComponentCreator('/docs/apis/xml_apis/admin_xml_apis/gettracklist_do', '1cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/admin_xml_apis/getuserinfo_do',
        component: ComponentCreator('/docs/apis/xml_apis/admin_xml_apis/getuserinfo_do', '302'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/admin_xml_apis/getuserlist_do',
        component: ComponentCreator('/docs/apis/xml_apis/admin_xml_apis/getuserlist_do', '06a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/admin_xml_apis/updateteam_do',
        component: ComponentCreator('/docs/apis/xml_apis/admin_xml_apis/updateteam_do', '6a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/admin_xml_apis/updateuser_do',
        component: ComponentCreator('/docs/apis/xml_apis/admin_xml_apis/updateuser_do', '696'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/dynamic_xml_apis/',
        component: ComponentCreator('/docs/apis/xml_apis/dynamic_xml_apis/', 'e5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/flaw_report_xml_apis/',
        component: ComponentCreator('/docs/apis/xml_apis/flaw_report_xml_apis/', '57f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/flaw_report_xml_apis/downloadflawreport_do',
        component: ComponentCreator('/docs/apis/xml_apis/flaw_report_xml_apis/downloadflawreport_do', '341'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/flaw_report_xml_apis/flaw_report_xml_apis_quickref',
        component: ComponentCreator('/docs/apis/xml_apis/flaw_report_xml_apis/flaw_report_xml_apis_quickref', 'f48'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/flaw_report_xml_apis/generateflawreport_do',
        component: ComponentCreator('/docs/apis/xml_apis/flaw_report_xml_apis/generateflawreport_do', 'ee7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/mitigation_xml_apis/',
        component: ComponentCreator('/docs/apis/xml_apis/mitigation_xml_apis/', 'ea5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/mitigation_xml_apis/getmitigationinfo_do',
        component: ComponentCreator('/docs/apis/xml_apis/mitigation_xml_apis/getmitigationinfo_do', 'a7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/mitigation_xml_apis/mitigation_xml_apis_quickref',
        component: ComponentCreator('/docs/apis/xml_apis/mitigation_xml_apis/mitigation_xml_apis_quickref', '6ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/mitigation_xml_apis/updatemitigationinfo_do',
        component: ComponentCreator('/docs/apis/xml_apis/mitigation_xml_apis/updatemitigationinfo_do', 'dc8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/mitigation_xml_apis/xml_api_mitigation_tutorial',
        component: ComponentCreator('/docs/apis/xml_apis/mitigation_xml_apis/xml_api_mitigation_tutorial', '3b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/results_xml_apis/',
        component: ComponentCreator('/docs/apis/xml_apis/results_xml_apis/', 'db8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/results_xml_apis/detailedreport_do',
        component: ComponentCreator('/docs/apis/xml_apis/results_xml_apis/detailedreport_do', '02f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/results_xml_apis/detailedreportpdf_do',
        component: ComponentCreator('/docs/apis/xml_apis/results_xml_apis/detailedreportpdf_do', '694'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/results_xml_apis/getaccountcustomfieldlist_do',
        component: ComponentCreator('/docs/apis/xml_apis/results_xml_apis/getaccountcustomfieldlist_do', '167'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/results_xml_apis/getappbuilds_do',
        component: ComponentCreator('/docs/apis/xml_apis/results_xml_apis/getappbuilds_do', '859'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/results_xml_apis/getcallstacks_do',
        component: ComponentCreator('/docs/apis/xml_apis/results_xml_apis/getcallstacks_do', '8cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/results_xml_apis/results_api_mapping_tasks',
        component: ComponentCreator('/docs/apis/xml_apis/results_xml_apis/results_api_mapping_tasks', '43e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/results_xml_apis/results_xml_apis_quickref',
        component: ComponentCreator('/docs/apis/xml_apis/results_xml_apis/results_xml_apis_quickref', '941'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/results_xml_apis/summaryreport_do',
        component: ComponentCreator('/docs/apis/xml_apis/results_xml_apis/summaryreport_do', 'd4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/results_xml_apis/summaryreportpdf_do',
        component: ComponentCreator('/docs/apis/xml_apis/results_xml_apis/summaryreportpdf_do', '67a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/results_xml_apis/thirdpartyreportpdf_do',
        component: ComponentCreator('/docs/apis/xml_apis/results_xml_apis/thirdpartyreportpdf_do', '797'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/results_xml_apis/xml_api_results_tutorial',
        component: ComponentCreator('/docs/apis/xml_apis/results_xml_apis/xml_api_results_tutorial', 'f72'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/sandbox_xml_apis/',
        component: ComponentCreator('/docs/apis/xml_apis/sandbox_xml_apis/', '27c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/sandbox_xml_apis/createsandbox_do',
        component: ComponentCreator('/docs/apis/xml_apis/sandbox_xml_apis/createsandbox_do', 'fb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/sandbox_xml_apis/deletesandbox_do',
        component: ComponentCreator('/docs/apis/xml_apis/sandbox_xml_apis/deletesandbox_do', '15c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/sandbox_xml_apis/getsandboxlist_do',
        component: ComponentCreator('/docs/apis/xml_apis/sandbox_xml_apis/getsandboxlist_do', '1b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/sandbox_xml_apis/promotesandbox_do',
        component: ComponentCreator('/docs/apis/xml_apis/sandbox_xml_apis/promotesandbox_do', '764'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/sandbox_xml_apis/sandbox_xml_apis_quickref',
        component: ComponentCreator('/docs/apis/xml_apis/sandbox_xml_apis/sandbox_xml_apis_quickref', 'e49'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/sandbox_xml_apis/updatesandbox_do',
        component: ComponentCreator('/docs/apis/xml_apis/sandbox_xml_apis/updatesandbox_do', 'b77'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/', '248'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/beginprescan_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/beginprescan_do', 'c74'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/beginscan_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/beginscan_do', '8b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/createapp_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/createapp_do', 'af9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/createbuild_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/createbuild_do', 'bc6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/deleteapp_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/deleteapp_do', '764'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/deletebuild_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/deletebuild_do', 'f3c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/getappinfo_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/getappinfo_do', '2f1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/getapplist_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/getapplist_do', '963'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/getbuildinfo_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/getbuildinfo_do', '2e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/getbuildlist_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/getbuildlist_do', '8e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/getfilelist_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/getfilelist_do', '501'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/getpolicylist_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/getpolicylist_do', '552'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/getprescanresults_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/getprescanresults_do', 'a1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/getvendorlist_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/getvendorlist_do', 'fd0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/removefile_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/removefile_do', 'fb4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/updateapp_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/updateapp_do', '9eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/updatebuild_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/updatebuild_do', '231'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/upload_api_mapping_tasks',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/upload_api_mapping_tasks', 'ceb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/upload_xml_apis_quickref',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/upload_xml_apis_quickref', '1ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/uploadfile_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/uploadfile_do', '3bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/uploadlargefile_do',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/uploadlargefile_do', 'a5c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/xml_api_buildinfo_table',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/xml_api_buildinfo_table', 'f7d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/xml_api_prescan_status',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/xml_api_prescan_status', '114'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/upload_xml_apis/xml_api_upload_tutorial',
        component: ComponentCreator('/docs/apis/xml_apis/upload_xml_apis/xml_api_upload_tutorial', 'fbd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/vast_xml_apis/',
        component: ComponentCreator('/docs/apis/xml_apis/vast_xml_apis/', '25b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/vast_xml_apis/getsharedreportinfo_do',
        component: ComponentCreator('/docs/apis/xml_apis/vast_xml_apis/getsharedreportinfo_do', '252'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/vast_xml_apis/getsharedreportlist_do',
        component: ComponentCreator('/docs/apis/xml_apis/vast_xml_apis/getsharedreportlist_do', '779'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/vast_xml_apis/sharedreport_do',
        component: ComponentCreator('/docs/apis/xml_apis/vast_xml_apis/sharedreport_do', '6ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/vast_xml_apis/sharedreportpdf_do',
        component: ComponentCreator('/docs/apis/xml_apis/vast_xml_apis/sharedreportpdf_do', '9b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apis/xml_apis/vast_xml_apis/vast_xml_apis_quickref',
        component: ComponentCreator('/docs/apis/xml_apis/vast_xml_apis/vast_xml_apis_quickref', '321'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apisec/',
        component: ComponentCreator('/docs/apisec/', '23b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apisec/apisec_about_specs',
        component: ComponentCreator('/docs/apisec/apisec_about_specs', '264'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apisec/apisec_config',
        component: ComponentCreator('/docs/apisec/apisec_config', '1c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apisec/apisec_intro',
        component: ComponentCreator('/docs/apisec/apisec_intro', '54f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apisec/apisec_reviewing_results/',
        component: ComponentCreator('/docs/apisec/apisec_reviewing_results/', '16d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apisec/apisec_reviewing_results/apisec_prescan_results',
        component: ComponentCreator('/docs/apisec/apisec_reviewing_results/apisec_prescan_results', '656'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apisec/apisec_reviewing_results/apisec_video_prescan_results',
        component: ComponentCreator('/docs/apisec/apisec_reviewing_results/apisec_video_prescan_results', 'a06'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apisec/apisec_reviewing_results/apisec_video_scan_results',
        component: ComponentCreator('/docs/apisec/apisec_reviewing_results/apisec_video_scan_results', '037'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apisec/create_scan/',
        component: ComponentCreator('/docs/apisec/create_scan/', 'c8b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apisec/create_scan/apisec_create_scan',
        component: ComponentCreator('/docs/apisec/create_scan/apisec_create_scan', 'e14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apisec/create_scan/apisec_fix_relative_urls',
        component: ComponentCreator('/docs/apisec/create_scan/apisec_fix_relative_urls', '238'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apisec/create_scan/video_create_api_scan',
        component: ComponentCreator('/docs/apisec/create_scan/video_create_api_scan', 'e69'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/apisec/create_scan/video_manage_api_specifications',
        component: ComponentCreator('/docs/apisec/create_scan/video_manage_api_specifications', '9ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/',
        component: ComponentCreator('/docs/build_systems/', 'b38'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/ant_integration/',
        component: ComponentCreator('/docs/build_systems/ant_integration/', 'ef2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/ant_integration/integrate_ant',
        component: ComponentCreator('/docs/build_systems/ant_integration/integrate_ant', '9a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/aws_codestar_integration/',
        component: ComponentCreator('/docs/build_systems/aws_codestar_integration/', '2a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/aws_codestar_integration/aws_configure_codebuild_project_sca',
        component: ComponentCreator('/docs/build_systems/aws_codestar_integration/aws_configure_codebuild_project_sca', '3c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/aws_codestar_integration/aws_configure_codebuild_project_static',
        component: ComponentCreator('/docs/build_systems/aws_codestar_integration/aws_configure_codebuild_project_static', 'b1b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/aws_codestar_integration/aws_configure_pipeline',
        component: ComponentCreator('/docs/build_systems/aws_codestar_integration/aws_configure_pipeline', '649'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/azure_devops_integration/',
        component: ComponentCreator('/docs/build_systems/azure_devops_integration/', '7e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/azure_devops_integration/azure_add_static_build_pipeline',
        component: ComponentCreator('/docs/build_systems/azure_devops_integration/azure_add_static_build_pipeline', 'a29'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/azure_devops_integration/azure_add_static_build_pipeline_yaml/',
        component: ComponentCreator('/docs/build_systems/azure_devops_integration/azure_add_static_build_pipeline_yaml/', 'b45'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/azure_devops_integration/azure_add_static_build_pipeline_yaml/azure_uploadscan_yaml_props',
        component: ComponentCreator('/docs/build_systems/azure_devops_integration/azure_add_static_build_pipeline_yaml/azure_uploadscan_yaml_props', '95e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/azure_devops_integration/azure_add_static_release_pipeline',
        component: ComponentCreator('/docs/build_systems/azure_devops_integration/azure_add_static_release_pipeline', '2e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/azure_devops_integration/azure_check_version',
        component: ComponentCreator('/docs/build_systems/azure_devops_integration/azure_check_version', 'd35'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/azure_devops_integration/azure_configure_dotnet_build',
        component: ComponentCreator('/docs/build_systems/azure_devops_integration/azure_configure_dotnet_build', '6dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/azure_devops_integration/azure_create_service_connection',
        component: ComponentCreator('/docs/build_systems/azure_devops_integration/azure_create_service_connection', 'cc9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/azure_devops_integration/azure_hide_proxy_password',
        component: ComponentCreator('/docs/build_systems/azure_devops_integration/azure_hide_proxy_password', 'd05'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/azure_devops_integration/install_azure_extension',
        component: ComponentCreator('/docs/build_systems/azure_devops_integration/install_azure_extension', '477'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/bamboo_integration/',
        component: ComponentCreator('/docs/build_systems/bamboo_integration/', '2c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/bamboo_integration/bamboo_build_maven_project',
        component: ComponentCreator('/docs/build_systems/bamboo_integration/bamboo_build_maven_project', 'b45'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/bamboo_integration/bamboo_create_plan_dotnet_apps',
        component: ComponentCreator('/docs/build_systems/bamboo_integration/bamboo_create_plan_dotnet_apps', '4d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/bamboo_integration/bamboo_create_plan_java_apps',
        component: ComponentCreator('/docs/build_systems/bamboo_integration/bamboo_create_plan_java_apps', '28e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/bamboo_integration/bamboo_submit_app',
        component: ComponentCreator('/docs/build_systems/bamboo_integration/bamboo_submit_app', '8eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/github_integration/',
        component: ComponentCreator('/docs/build_systems/github_integration/', '979'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/integrating_build_systems',
        component: ComponentCreator('/docs/build_systems/integrating_build_systems', '0f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/', '1f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_add_pipeline_static_job_creds_binding',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_add_pipeline_static_job_creds_binding', '054'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_add_static_build_job',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_add_static_build_job', '03a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_installation/',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_installation/', 'fbf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_installation/jenkins_configure_creds_binding_plugin',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_installation/jenkins_configure_creds_binding_plugin', 'ec3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_installation/jenkins_configure_plugin',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_installation/jenkins_configure_plugin', '9be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_installation/jenkins_install_creds_binding_plugin',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_installation/jenkins_install_creds_binding_plugin', 'b65'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_installation/jenkins_uninstall_plugin',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_installation/jenkins_uninstall_plugin', 'cb5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_installation/video_jenkins_use_creds_binding_plugin',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_installation/video_jenkins_use_creds_binding_plugin', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_pipeline_script_params',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_pipeline_script_params', '58e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_prereqs',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_prereqs', '648'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_review_static_sca_results',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_review_static_sca_results', '2ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/', '5c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/jenkins_configure_da_resubmit_freestyle',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/jenkins_configure_da_resubmit_freestyle', '4d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/jenkins_configure_da_resubmit_pipeline',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/jenkins_configure_da_resubmit_pipeline', '902'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/jenkins_configure_da_review_freestyle',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/jenkins_configure_da_review_freestyle', '220'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/jenkins_configure_da_review_pipeline',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/jenkins_configure_da_review_pipeline', 'b7d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/jenkins_configure_global_credentials_freestyle',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/jenkins_configure_global_credentials_freestyle', 'e33'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/video_jenkins_configure_da_resubmit_freestyle',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/video_jenkins_configure_da_resubmit_freestyle', 'df4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/video_jenkins_configure_da_resubmit_review_pipeline',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_using_dynamic_analysis/video_jenkins_configure_da_resubmit_review_pipeline', '034'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/jenkins_integration/jenkins_using_sandboxes',
        component: ComponentCreator('/docs/build_systems/jenkins_integration/jenkins_using_sandboxes', '6ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/maven_integration/',
        component: ComponentCreator('/docs/build_systems/maven_integration/', '51c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/maven_integration/integrate_maven',
        component: ComponentCreator('/docs/build_systems/maven_integration/integrate_maven', '3ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/teamcity_integration/',
        component: ComponentCreator('/docs/build_systems/teamcity_integration/', '2c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/teamcity_integration/config_teamcity_plugin',
        component: ComponentCreator('/docs/build_systems/teamcity_integration/config_teamcity_plugin', '6f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/teamcity_integration/config_teamcity_scan',
        component: ComponentCreator('/docs/build_systems/teamcity_integration/config_teamcity_scan', '2d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/teamcity_integration/install_teamcity_plugin',
        component: ComponentCreator('/docs/build_systems/teamcity_integration/install_teamcity_plugin', '966'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/build_systems/teamcity_integration/uninstall_teamcity_plugin',
        component: ComponentCreator('/docs/build_systems/teamcity_integration/uninstall_teamcity_plugin', '857'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/container/',
        component: ComponentCreator('/docs/container/', '92b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/container/container_commands',
        component: ComponentCreator('/docs/container/container_commands', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/container/container_scanning_requirements',
        component: ComponentCreator('/docs/container/container_scanning_requirements', '5f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/container/install_container_scanning',
        component: ComponentCreator('/docs/container/install_container_scanning', '4ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/container/review_container_findings',
        component: ComponentCreator('/docs/container/review_container_findings', '46c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Discovery/',
        component: ComponentCreator('/docs/Discovery/', 'b42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Discovery/c_about_discovery',
        component: ComponentCreator('/docs/Discovery/c_about_discovery', '814'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Discovery/discovery_data_dictionary/',
        component: ComponentCreator('/docs/Discovery/discovery_data_dictionary/', '5d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Discovery/discovery_data_dictionary/c_action_items_dd',
        component: ComponentCreator('/docs/Discovery/discovery_data_dictionary/c_action_items_dd', '8fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Discovery/discovery_data_dictionary/r_Discovery_data',
        component: ComponentCreator('/docs/Discovery/discovery_data_dictionary/r_Discovery_data', '200'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Discovery/discovery_data_dictionary/r_discovery_scan_dashboard',
        component: ComponentCreator('/docs/Discovery/discovery_data_dictionary/r_discovery_scan_dashboard', '171'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Discovery/discovery_data_dictionary/r_domains_need_review_dd',
        component: ComponentCreator('/docs/Discovery/discovery_data_dictionary/r_domains_need_review_dd', '77b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Discovery/discovery_data_dictionary/r_dynamic_mp',
        component: ComponentCreator('/docs/Discovery/discovery_data_dictionary/r_dynamic_mp', '2ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Discovery/discovery_data_dictionary/r_URL_structures_dd',
        component: ComponentCreator('/docs/Discovery/discovery_data_dictionary/r_URL_structures_dd', '7e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Discovery/t_change_discovery_visibility',
        component: ComponentCreator('/docs/Discovery/t_change_discovery_visibility', '521'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Discovery/t_request_discovery_scan',
        component: ComponentCreator('/docs/Discovery/t_request_discovery_scan', '6a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/',
        component: ComponentCreator('/docs/dynamic_analysis/', 'f25'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/about_da_status/',
        component: ComponentCreator('/docs/dynamic_analysis/about_da_status/', '6e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/about_da_status/about_da_notifications',
        component: ComponentCreator('/docs/dynamic_analysis/about_da_status/about_da_notifications', '71c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/configuring_dast_web_scans/',
        component: ComponentCreator('/docs/dynamic_analysis/configuring_dast_web_scans/', '276'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/configuring_dast_web_scans/about_dynamic_scan_capacity',
        component: ComponentCreator('/docs/dynamic_analysis/configuring_dast_web_scans/about_dynamic_scan_capacity', 'c13'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/configuring_dast_web_scans/configure_dynamic_web_login_settings',
        component: ComponentCreator('/docs/dynamic_analysis/configuring_dast_web_scans/configure_dynamic_web_login_settings', '0a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/configuring_dast_web_scans/configure_dynamic_web_urls',
        component: ComponentCreator('/docs/dynamic_analysis/configuring_dast_web_scans/configure_dynamic_web_urls', '41a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/configuring_dast_web_scans/dynamic_configure_ism',
        component: ComponentCreator('/docs/dynamic_analysis/configuring_dast_web_scans/dynamic_configure_ism', 'a81'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/configuring_dast_web_scans/dynamic_selenium_commands',
        component: ComponentCreator('/docs/dynamic_analysis/configuring_dast_web_scans/dynamic_selenium_commands', 'd80'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/configuring_dast_web_scans/dynamic_web_auth_recommend',
        component: ComponentCreator('/docs/dynamic_analysis/configuring_dast_web_scans/dynamic_web_auth_recommend', '6d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/configuring_dast_web_scans/dynamic_web_provide_crawl_script',
        component: ComponentCreator('/docs/dynamic_analysis/configuring_dast_web_scans/dynamic_web_provide_crawl_script', 'a97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/configuring_dast_web_scans/dynamic_web_provide_login_creds',
        component: ComponentCreator('/docs/dynamic_analysis/configuring_dast_web_scans/dynamic_web_provide_login_creds', 'd65'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/configuring_dast_web_scans/dynamic_web_selenium_best_practices',
        component: ComponentCreator('/docs/dynamic_analysis/configuring_dast_web_scans/dynamic_web_selenium_best_practices', '204'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/configuring_dast_web_scans/video_dynamic_analysis_web_configure_ism',
        component: ComponentCreator('/docs/dynamic_analysis/configuring_dast_web_scans/video_dynamic_analysis_web_configure_ism', 'b9a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/configuring_dast_web_scans/video_dynamic_web_configure_login',
        component: ComponentCreator('/docs/dynamic_analysis/configuring_dast_web_scans/video_dynamic_web_configure_login', '311'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/configuring_dast_web_scans/video_dynamic_web_create_scripts_selenium',
        component: ComponentCreator('/docs/dynamic_analysis/configuring_dast_web_scans/video_dynamic_web_create_scripts_selenium', '5e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/configuring_waf_rules/',
        component: ComponentCreator('/docs/dynamic_analysis/configuring_waf_rules/', 'bb0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/configuring_waf_rules/create_da_waf_imperva',
        component: ComponentCreator('/docs/dynamic_analysis/configuring_waf_rules/create_da_waf_imperva', 'b89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/configuring_waf_rules/create_da_waf_modsec',
        component: ComponentCreator('/docs/dynamic_analysis/configuring_waf_rules/create_da_waf_modsec', '57e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/getstarted_da_web/',
        component: ComponentCreator('/docs/dynamic_analysis/getstarted_da_web/', 'ac2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/getstarted_da_web/about_da_production_safe',
        component: ComponentCreator('/docs/dynamic_analysis/getstarted_da_web/about_da_production_safe', '831'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/getstarted_da_web/access_da_in_platform',
        component: ComponentCreator('/docs/dynamic_analysis/getstarted_da_web/access_da_in_platform', 'a0c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/getstarted_da_web/configure_da_ism_scan_web',
        component: ComponentCreator('/docs/dynamic_analysis/getstarted_da_web/configure_da_ism_scan_web', 'c79'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/getstarted_da_web/create_da_scan_web',
        component: ComponentCreator('/docs/dynamic_analysis/getstarted_da_web/create_da_scan_web', 'a70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/getstarted_da_web/da_workflow',
        component: ComponentCreator('/docs/dynamic_analysis/getstarted_da_web/da_workflow', 'be4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/getstarted_da_web/delete_da',
        component: ComponentCreator('/docs/dynamic_analysis/getstarted_da_web/delete_da', '748'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/getstarted_da_web/preparing_da',
        component: ComponentCreator('/docs/dynamic_analysis/getstarted_da_web/preparing_da', '1cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/getstarted_da_web/run_authenticated_da_scan_web',
        component: ComponentCreator('/docs/dynamic_analysis/getstarted_da_web/run_authenticated_da_scan_web', 'e75'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/getstarted_da_web/run_unauthenticated_da_scan_web',
        component: ComponentCreator('/docs/dynamic_analysis/getstarted_da_web/run_unauthenticated_da_scan_web', 'acd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/getstarted_da_web/supported_da_tech',
        component: ComponentCreator('/docs/dynamic_analysis/getstarted_da_web/supported_da_tech', '668'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/getstarted_da_web/video_run_unauthenticated_da_scan_web',
        component: ComponentCreator('/docs/dynamic_analysis/getstarted_da_web/video_run_unauthenticated_da_scan_web', 'bb7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/prescan_da_web_urls/',
        component: ComponentCreator('/docs/dynamic_analysis/prescan_da_web_urls/', '6bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/prescan_da_web_urls/reviewing_da_prescan_errors',
        component: ComponentCreator('/docs/dynamic_analysis/prescan_da_web_urls/reviewing_da_prescan_errors', '9af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/prescan_da_web_urls/troubleshoot_da_prescan_errors',
        component: ComponentCreator('/docs/dynamic_analysis/prescan_da_web_urls/troubleshoot_da_prescan_errors', '5b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/prescan_da_web_urls/video_initiate_da_prescan',
        component: ComponentCreator('/docs/dynamic_analysis/prescan_da_web_urls/video_initiate_da_prescan', 'b17'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/prescan_da_web_urls/video_troubleshoot_da_prescan_errors_connect',
        component: ComponentCreator('/docs/dynamic_analysis/prescan_da_web_urls/video_troubleshoot_da_prescan_errors_connect', '235'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/prescan_da_web_urls/video_troubleshoot_prescan_errors_authenticate',
        component: ComponentCreator('/docs/dynamic_analysis/prescan_da_web_urls/video_troubleshoot_prescan_errors_authenticate', '77e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/scheduling_dast_scans/',
        component: ComponentCreator('/docs/dynamic_analysis/scheduling_dast_scans/', '63c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/scheduling_dast_scans/check_status_scheduled_dynamic_analysis',
        component: ComponentCreator('/docs/dynamic_analysis/scheduling_dast_scans/check_status_scheduled_dynamic_analysis', 'f17'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/scheduling_dast_scans/schedule_dynamic_analysis.',
        component: ComponentCreator('/docs/dynamic_analysis/scheduling_dast_scans/schedule_dynamic_analysis.', '8e3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/scheduling_dast_scans/schedule_recurring_dynamic_analysis',
        component: ComponentCreator('/docs/dynamic_analysis/scheduling_dast_scans/schedule_recurring_dynamic_analysis', '7f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/scheduling_dast_scans/stop_scheduled_dynamic_analysis',
        component: ComponentCreator('/docs/dynamic_analysis/scheduling_dast_scans/stop_scheduled_dynamic_analysis', 'a64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/viewing_dynamic_results/',
        component: ComponentCreator('/docs/dynamic_analysis/viewing_dynamic_results/', 'e0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/viewing_dynamic_results/about_dynamic_app_linking',
        component: ComponentCreator('/docs/dynamic_analysis/viewing_dynamic_results/about_dynamic_app_linking', '69c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/viewing_dynamic_results/about_dynamic_url_scan_results',
        component: ComponentCreator('/docs/dynamic_analysis/viewing_dynamic_results/about_dynamic_url_scan_results', 'bc9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/viewing_dynamic_results/autolink_da_to_apps',
        component: ComponentCreator('/docs/dynamic_analysis/viewing_dynamic_results/autolink_da_to_apps', '7ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/viewing_dynamic_results/manually_link_dynamic_analysis_to_app',
        component: ComponentCreator('/docs/dynamic_analysis/viewing_dynamic_results/manually_link_dynamic_analysis_to_app', 'efd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/viewing_dynamic_results/manually_unlink_da_results',
        component: ComponentCreator('/docs/dynamic_analysis/viewing_dynamic_results/manually_unlink_da_results', 'c21'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/viewing_dynamic_results/understand_da_coverage_report',
        component: ComponentCreator('/docs/dynamic_analysis/viewing_dynamic_results/understand_da_coverage_report', 'c7f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/viewing_dynamic_results/video_manually_link_unlink_da_app',
        component: ComponentCreator('/docs/dynamic_analysis/viewing_dynamic_results/video_manually_link_unlink_da_app', '35d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/viewing_dynamic_results/video_view_dynamic_web_results',
        component: ComponentCreator('/docs/dynamic_analysis/viewing_dynamic_results/video_view_dynamic_web_results', 'f39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/viewing_dynamic_results/view_da_history',
        component: ComponentCreator('/docs/dynamic_analysis/viewing_dynamic_results/view_da_history', '5a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dynamic_analysis/viewing_dynamic_results/view_download_da_coverage_rpt',
        component: ComponentCreator('/docs/dynamic_analysis/viewing_dynamic_results/view_download_da_coverage_rpt', '4e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/',
        component: ComponentCreator('/docs/eLearning/', 'a35'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearning_master',
        component: ComponentCreator('/docs/eLearning/elearning_master', 'a1d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/', '653'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/c_about_auto_extend',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/c_about_auto_extend', '465'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/c_assigning_course_tracks',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/c_assigning_course_tracks', '149'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/c_defining_course_availability',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/c_defining_course_availability', '102'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/elearning_acl',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/elearning_acl', '717'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/elearning_admin_page',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/elearning_admin_page', '005'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/managing_curricula/',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/managing_curricula/', 'acd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/managing_curricula/t_assign_curriculum',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/managing_curricula/t_assign_curriculum', 'b64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/managing_curricula/t_elearning_fixed_date',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/managing_curricula/t_elearning_fixed_date', 'b21'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/managing_curricula/t_elearning_fixed_date_compliance',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/managing_curricula/t_elearning_fixed_date_compliance', '972'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/managing_curricula/t_elearning_no_due_date',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/managing_curricula/t_elearning_no_due_date', 'f5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/managing_curricula/t_elearning_relative_date',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/managing_curricula/t_elearning_relative_date', 'b0a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/managing_curricula/t_modify_curriculum',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/managing_curricula/t_modify_curriculum', '1a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/t_assign_track_bulk',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/t_assign_track_bulk', 'f30'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/t_enable_levels',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/t_enable_levels', 'd2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/t_manage_elearning_managers',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/t_manage_elearning_managers', '8f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/t_modify_elearning_managers',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/t_modify_elearning_managers', 'a80'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/t_modify_learner_settings',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/t_modify_learner_settings', 'ca4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/t_notification_settings',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/t_notification_settings', 'a90'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningAdministrators/t_view_elearning_license',
        component: ComponentCreator('/docs/eLearning/elearningAdministrators/t_view_elearning_license', '1ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningManagers/',
        component: ComponentCreator('/docs/eLearning/elearningManagers/', '6d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningManagers/about_metrics/',
        component: ComponentCreator('/docs/eLearning/elearningManagers/about_metrics/', '8d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningManagers/about_metrics/t_download_courses_report',
        component: ComponentCreator('/docs/eLearning/elearningManagers/about_metrics/t_download_courses_report', '66f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningManagers/c_elearn_manager_learning_level_progress',
        component: ComponentCreator('/docs/eLearning/elearningManagers/c_elearn_manager_learning_level_progress', 'b02'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningManagers/c_send_email',
        component: ComponentCreator('/docs/eLearning/elearningManagers/c_send_email', '401'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningManagers/elearning_manager',
        component: ComponentCreator('/docs/eLearning/elearningManagers/elearning_manager', 'f5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningManagers/t_view_curricula_learner_level_progress',
        component: ComponentCreator('/docs/eLearning/elearningManagers/t_view_curricula_learner_level_progress', 'd3f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningUsers/',
        component: ComponentCreator('/docs/eLearning/elearningUsers/', 'bfb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningUsers/c_about_appsec_tutorials',
        component: ComponentCreator('/docs/eLearning/elearningUsers/c_about_appsec_tutorials', 'e1e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningUsers/elearning_aboutkb',
        component: ComponentCreator('/docs/eLearning/elearningUsers/elearning_aboutkb', '958'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningUsers/elearning_rec_courses',
        component: ComponentCreator('/docs/eLearning/elearningUsers/elearning_rec_courses', '605'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningUsers/elearning_wbcourselist',
        component: ComponentCreator('/docs/eLearning/elearningUsers/elearning_wbcourselist', 'ee7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningUsers/understanding_levels/',
        component: ComponentCreator('/docs/eLearning/elearningUsers/understanding_levels/', '3cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/eLearning/elearningUsers/understanding_levels/t_complete_learner_level',
        component: ComponentCreator('/docs/eLearning/elearningUsers/understanding_levels/t_complete_learner_level', 'b0f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/grc/',
        component: ComponentCreator('/docs/grc/', '408'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/grc/archer_xml_apis_quickref',
        component: ComponentCreator('/docs/grc/archer_xml_apis_quickref', 'ca2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/grc/c_about_archer',
        component: ComponentCreator('/docs/grc/c_about_archer', '41f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/grc/c_about_grc',
        component: ComponentCreator('/docs/grc/c_about_grc', 'ccc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/grc/c_archer_xml',
        component: ComponentCreator('/docs/grc/c_archer_xml', '3b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/grc/r_archer_deprec',
        component: ComponentCreator('/docs/grc/r_archer_deprec', 'ef3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/grc/r_downloadarcher',
        component: ComponentCreator('/docs/grc/r_downloadarcher', '1b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/grc/r_generatearcher',
        component: ComponentCreator('/docs/grc/r_generatearcher', '07b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/',
        component: ComponentCreator('/docs/greenlight/', 'a2c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/about_greenlight',
        component: ComponentCreator('/docs/greenlight/about_greenlight', '525'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_best_practices',
        component: ComponentCreator('/docs/greenlight/greenlight_best_practices', '06e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/', '7a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/greenlight_eclipse_enable_debugging',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/greenlight_eclipse_enable_debugging', 'd6a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/greenlight_eclipse_filter_findings',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/greenlight_eclipse_filter_findings', 'f9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/greenlight_eclipse_ignore_findings',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/greenlight_eclipse_ignore_findings', '608'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/install_greenlight_eclipse/',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/install_greenlight_eclipse/', 'e55'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/install_greenlight_eclipse/add_creds_greenlight_eclipse',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/install_greenlight_eclipse/add_creds_greenlight_eclipse', '6a7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/install_greenlight_eclipse/greenlight_eclipse_tutorial',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/install_greenlight_eclipse/greenlight_eclipse_tutorial', 'd11'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/install_greenlight_eclipse/install_greenlight_eclipse_ide',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/install_greenlight_eclipse/install_greenlight_eclipse_ide', '020'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/install_greenlight_eclipse/uninstall_greenlight_eclipse',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/install_greenlight_eclipse/uninstall_greenlight_eclipse', '470'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/install_greenlight_eclipse/video_install_greenlight_eclipse_marketplace',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/install_greenlight_eclipse/video_install_greenlight_eclipse_marketplace', 'a1a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/', '021'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/greenlight_eclipse_autoscan',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/greenlight_eclipse_autoscan', '114'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/greenlight_eclipse_cancel_scan',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/greenlight_eclipse_cancel_scan', '7bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/greenlight_eclipse_scan_jsp_tomcat',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/greenlight_eclipse_scan_jsp_tomcat', '727'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/greenlight_eclipse_scan_jsp_webspherer',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/greenlight_eclipse_scan_jsp_webspherer', '03e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/greenlight_eclipse_scan_maven_gradle/',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/greenlight_eclipse_scan_maven_gradle/', 'a7f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/greenlight_eclipse_scan_maven_gradle/greenlight_eclipse_tshoot_gradle',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/greenlight_eclipse_scan_maven_gradle/greenlight_eclipse_tshoot_gradle', 'e0c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/greenlight_eclipse_scan_maven_gradle/greenlight_eclipse_tshoot_maven',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/greenlight_eclipse_scan_maven_gradle/greenlight_eclipse_tshoot_maven', 'dd5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/greenlight_eclipse_status_icons',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/greenlight_eclipse_status_icons', '4fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/video_greenlight_eclipse_scan_java',
        component: ComponentCreator('/docs/greenlight/greenlight_eclipse/scan_greenlight_eclipse/video_greenlight_eclipse_scan_java', '5c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_intellij_android_studio/',
        component: ComponentCreator('/docs/greenlight/greenlight_intellij_android_studio/', '8c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_intellij_android_studio/greenlight_intellij_enable_logs',
        component: ComponentCreator('/docs/greenlight/greenlight_intellij_android_studio/greenlight_intellij_enable_logs', 'd2c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_intellij_android_studio/greenlight_intellij_sync_gradle',
        component: ComponentCreator('/docs/greenlight/greenlight_intellij_android_studio/greenlight_intellij_sync_gradle', '2c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_intellij_android_studio/install_greenlight_intellij/',
        component: ComponentCreator('/docs/greenlight/greenlight_intellij_android_studio/install_greenlight_intellij/', '81d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_intellij_android_studio/install_greenlight_intellij/add_creds_greenlight_intellij',
        component: ComponentCreator('/docs/greenlight/greenlight_intellij_android_studio/install_greenlight_intellij/add_creds_greenlight_intellij', '533'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_intellij_android_studio/install_greenlight_intellij/greenlight_intellij_tutorial',
        component: ComponentCreator('/docs/greenlight/greenlight_intellij_android_studio/install_greenlight_intellij/greenlight_intellij_tutorial', '0fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_intellij_android_studio/review_results_greenlight_intellij/',
        component: ComponentCreator('/docs/greenlight/greenlight_intellij_android_studio/review_results_greenlight_intellij/', '440'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_intellij_android_studio/review_results_greenlight_intellij/greenlight_intellij_filter_findings',
        component: ComponentCreator('/docs/greenlight/greenlight_intellij_android_studio/review_results_greenlight_intellij/greenlight_intellij_filter_findings', '4e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_intellij_android_studio/review_results_greenlight_intellij/greenlight_intellij_ignore_flaws',
        component: ComponentCreator('/docs/greenlight/greenlight_intellij_android_studio/review_results_greenlight_intellij/greenlight_intellij_ignore_flaws', '8dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_intellij_android_studio/review_results_greenlight_intellij/greenlight_intellij_review_finding_details',
        component: ComponentCreator('/docs/greenlight/greenlight_intellij_android_studio/review_results_greenlight_intellij/greenlight_intellij_review_finding_details', '299'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_intellij_android_studio/scan_greenlight_intellij/',
        component: ComponentCreator('/docs/greenlight/greenlight_intellij_android_studio/scan_greenlight_intellij/', '5f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_intellij_android_studio/scan_greenlight_intellij/greenlight_intellij_autoscan',
        component: ComponentCreator('/docs/greenlight/greenlight_intellij_android_studio/scan_greenlight_intellij/greenlight_intellij_autoscan', '6c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_prereqs',
        component: ComponentCreator('/docs/greenlight/greenlight_prereqs', 'da5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_scan_usage_reports',
        component: ComponentCreator('/docs/greenlight/greenlight_scan_usage_reports', '33f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_visual_studio/',
        component: ComponentCreator('/docs/greenlight/greenlight_visual_studio/', 'bf5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_visual_studio/greenlight_vs_vscode_view_debug_logs',
        component: ComponentCreator('/docs/greenlight/greenlight_visual_studio/greenlight_vs_vscode_view_debug_logs', 'be0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_visual_studio/install_greenlight_visual_studio/',
        component: ComponentCreator('/docs/greenlight/greenlight_visual_studio/install_greenlight_visual_studio/', '05e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_visual_studio/install_greenlight_visual_studio/greenlight_visual_studio_tutorial',
        component: ComponentCreator('/docs/greenlight/greenlight_visual_studio/install_greenlight_visual_studio/greenlight_visual_studio_tutorial', '6bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_visual_studio/install_greenlight_visual_studio/video_install_greenlight_visual_studio',
        component: ComponentCreator('/docs/greenlight/greenlight_visual_studio/install_greenlight_visual_studio/video_install_greenlight_visual_studio', '5de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_visual_studio/review_results_greenlight_visual_studio/',
        component: ComponentCreator('/docs/greenlight/greenlight_visual_studio/review_results_greenlight_visual_studio/', 'd4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_visual_studio/review_results_greenlight_visual_studio/greenlight_visual_studio_filter_results',
        component: ComponentCreator('/docs/greenlight/greenlight_visual_studio/review_results_greenlight_visual_studio/greenlight_visual_studio_filter_results', '364'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_visual_studio/review_results_greenlight_visual_studio/greenlight_visual_studio_ignore_flaws',
        component: ComponentCreator('/docs/greenlight/greenlight_visual_studio/review_results_greenlight_visual_studio/greenlight_visual_studio_ignore_flaws', 'c60'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_visual_studio/review_results_greenlight_visual_studio/greenlight_visual_studio_unignore_findings',
        component: ComponentCreator('/docs/greenlight/greenlight_visual_studio/review_results_greenlight_visual_studio/greenlight_visual_studio_unignore_findings', 'dda'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_visual_studio/review_results_greenlight_visual_studio/remediate_guidance_greenlight_visual_studio',
        component: ComponentCreator('/docs/greenlight/greenlight_visual_studio/review_results_greenlight_visual_studio/remediate_guidance_greenlight_visual_studio', 'ef6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_visual_studio/scan_greenlight_visual_studio/',
        component: ComponentCreator('/docs/greenlight/greenlight_visual_studio/scan_greenlight_visual_studio/', 'fe1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_visual_studio/scan_greenlight_visual_studio/greenlight_visual_studio_enable_autoscan',
        component: ComponentCreator('/docs/greenlight/greenlight_visual_studio/scan_greenlight_visual_studio/greenlight_visual_studio_enable_autoscan', 'fde'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_visual_studio/scan_greenlight_visual_studio/video_greenlight_visual_studio_scan_csharp',
        component: ComponentCreator('/docs/greenlight/greenlight_visual_studio/scan_greenlight_visual_studio/video_greenlight_visual_studio_scan_csharp', 'f19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/', '12d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/greenlight_vs_vscode_view_debug_logs',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/greenlight_vs_vscode_view_debug_logs', '335'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/install_greenlight_vs_code/',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/install_greenlight_vs_code/', '329'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/install_greenlight_vs_code/uninstall_vs_code_extension',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/install_greenlight_vs_code/uninstall_vs_code_extension', '4e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/install_greenlight_vs_code/video_install_veracode_for_vs_code',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/install_greenlight_vs_code/video_install_veracode_for_vs_code', '452'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/install_greenlight_vs_code/vs_code_prevent_vsix_caching',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/install_greenlight_vs_code/vs_code_prevent_vsix_caching', 'fe6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/review_results_greenlight_vs_code/',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/review_results_greenlight_vs_code/', '553'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/review_results_greenlight_vs_code/link_vs_code_findings_source_code',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/review_results_greenlight_vs_code/link_vs_code_findings_source_code', '608'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/review_results_greenlight_vs_code/video_vs_code_reviewing_findings',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/review_results_greenlight_vs_code/video_vs_code_reviewing_findings', '624'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/review_results_greenlight_vs_code/vs_code_filter_findings',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/review_results_greenlight_vs_code/vs_code_filter_findings', '290'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/review_results_greenlight_vs_code/vs_code_ignore_findings',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/review_results_greenlight_vs_code/vs_code_ignore_findings', '4da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/review_results_greenlight_vs_code/vs_code_unignore_findings',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/review_results_greenlight_vs_code/vs_code_unignore_findings', '208'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/scan_greenlight_vs_code/',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/scan_greenlight_vs_code/', 'e92'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/scan_greenlight_vs_code/enable_autoscan_vs_code',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/scan_greenlight_vs_code/enable_autoscan_vs_code', '61d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/scan_greenlight_vs_code/scan_file_vs_code',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/scan_greenlight_vs_code/scan_file_vs_code', '2e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/scan_greenlight_vs_code/scan_folder_vs_code',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/scan_greenlight_vs_code/scan_folder_vs_code', 'e10'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/scan_greenlight_vs_code/scan_queue_vs_code',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/scan_greenlight_vs_code/scan_queue_vs_code', '11e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/scan_greenlight_vs_code/video_scanning_with_vs_code',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/scan_greenlight_vs_code/video_scanning_with_vs_code', '045'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/greenlight/greenlight_vs_code/veracode_vs_code_commands',
        component: ComponentCreator('/docs/greenlight/greenlight_vs_code/veracode_vs_code_commands', 'c70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/',
        component: ComponentCreator('/docs/ides/', '570'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/ide_integrations',
        component: ComponentCreator('/docs/ides/ide_integrations', '348'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/mobile_app_packager/',
        component: ComponentCreator('/docs/ides/mobile_app_packager/', '838'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/mobile_app_packager/automate_install_mobile_app_pkgr_cli_tool',
        component: ComponentCreator('/docs/ides/mobile_app_packager/automate_install_mobile_app_pkgr_cli_tool', '85a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/mobile_app_packager/install_mobile_app_pkgr',
        component: ComponentCreator('/docs/ides/mobile_app_packager/install_mobile_app_pkgr', '9da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/mobile_app_packager/manual_install_mobile_app_pkgr_cli_tool',
        component: ComponentCreator('/docs/ides/mobile_app_packager/manual_install_mobile_app_pkgr_cli_tool', '8d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/mobile_app_packager/mobile_app_pkgr_cli_tool_options',
        component: ComponentCreator('/docs/ides/mobile_app_packager/mobile_app_pkgr_cli_tool_options', 'f1a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/mobile_app_packager/mobile_app_pkgr_install_cli_tool',
        component: ComponentCreator('/docs/ides/mobile_app_packager/mobile_app_pkgr_install_cli_tool', '007'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/mobile_app_packager/mobile_app_pkgr_package_apps',
        component: ComponentCreator('/docs/ides/mobile_app_packager/mobile_app_pkgr_package_apps', '0e3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/mobile_app_packager/use_mobile_app_pkgr_cli_tool',
        component: ComponentCreator('/docs/ides/mobile_app_packager/use_mobile_app_pkgr_cli_tool', '65e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/mobile_app_packager/video_install_mobile_app_pkgr',
        component: ComponentCreator('/docs/ides/mobile_app_packager/video_install_mobile_app_pkgr', '156'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/mobile_app_packager/video_install_mobile_pkgr_cli',
        component: ComponentCreator('/docs/ides/mobile_app_packager/video_install_mobile_pkgr_cli', 'f2e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/',
        component: ComponentCreator('/docs/ides/static_for_eclipse/', 'ef7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/install_static_eclipse/',
        component: ComponentCreator('/docs/ides/static_for_eclipse/install_static_eclipse/', '6b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/install_static_eclipse/install_mirrored_static_eclipse_site',
        component: ComponentCreator('/docs/ides/static_for_eclipse/install_static_eclipse/install_mirrored_static_eclipse_site', 'fad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/install_static_eclipse/install_static_eclipse_proxy',
        component: ComponentCreator('/docs/ides/static_for_eclipse/install_static_eclipse/install_static_eclipse_proxy', 'df3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/install_static_eclipse/mirror_static_eclipse_site',
        component: ComponentCreator('/docs/ides/static_for_eclipse/install_static_eclipse/mirror_static_eclipse_site', 'ac8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/install_static_eclipse/uninstall_static_eclipse',
        component: ComponentCreator('/docs/ides/static_for_eclipse/install_static_eclipse/uninstall_static_eclipse', 'b6d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/install_static_eclipse/update_static_eclipse',
        component: ComponentCreator('/docs/ides/static_for_eclipse/install_static_eclipse/update_static_eclipse', '927'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/manage_creds_static_eclipse/',
        component: ComponentCreator('/docs/ides/static_for_eclipse/manage_creds_static_eclipse/', '973'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/manage_creds_static_eclipse/change_pwd_static_eclipse',
        component: ComponentCreator('/docs/ides/static_for_eclipse/manage_creds_static_eclipse/change_pwd_static_eclipse', 'cf4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/manage_creds_static_eclipse/reset_pwd_static_eclipse',
        component: ComponentCreator('/docs/ides/static_for_eclipse/manage_creds_static_eclipse/reset_pwd_static_eclipse', '16c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/manage_flaws_static_eclipse/',
        component: ComponentCreator('/docs/ides/static_for_eclipse/manage_flaws_static_eclipse/', '83e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/manage_flaws_static_eclipse/eclipse_create_project_source_files_flaws',
        component: ComponentCreator('/docs/ides/static_for_eclipse/manage_flaws_static_eclipse/eclipse_create_project_source_files_flaws', '6a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/manage_flaws_static_eclipse/eclipse_mitigate_flaws',
        component: ComponentCreator('/docs/ides/static_for_eclipse/manage_flaws_static_eclipse/eclipse_mitigate_flaws', '289'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/manage_flaws_static_eclipse/eclipse_view_results',
        component: ComponentCreator('/docs/ides/static_for_eclipse/manage_flaws_static_eclipse/eclipse_view_results', '80f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/manage_flaws_static_eclipse/eclipse_view_results_call_stacks',
        component: ComponentCreator('/docs/ides/static_for_eclipse/manage_flaws_static_eclipse/eclipse_view_results_call_stacks', '3fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/manage_flaws_static_eclipse/eclipse_viewing_flaws_source_files',
        component: ComponentCreator('/docs/ides/static_for_eclipse/manage_flaws_static_eclipse/eclipse_viewing_flaws_source_files', '15f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/manage_flaws_static_eclipse/import_results_api_static_eclipse',
        component: ComponentCreator('/docs/ides/static_for_eclipse/manage_flaws_static_eclipse/import_results_api_static_eclipse', 'ce4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/manage_flaws_static_eclipse/import_results_platform_static_eclipse',
        component: ComponentCreator('/docs/ides/static_for_eclipse/manage_flaws_static_eclipse/import_results_platform_static_eclipse', 'b7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/scan_static_eclipse/',
        component: ComponentCreator('/docs/ides/static_for_eclipse/scan_static_eclipse/', '55f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/scan_static_eclipse/debug_prescan_static_eclipse',
        component: ComponentCreator('/docs/ides/static_for_eclipse/scan_static_eclipse/debug_prescan_static_eclipse', '246'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/scan_static_eclipse/run_prescan_static_eclipse',
        component: ComponentCreator('/docs/ides/static_for_eclipse/scan_static_eclipse/run_prescan_static_eclipse', '0b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/scan_static_eclipse/use_sandbox_static_eclipse',
        component: ComponentCreator('/docs/ides/static_for_eclipse/scan_static_eclipse/use_sandbox_static_eclipse', '519'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_eclipse/scan_static_eclipse/video_scan_static_eclipse',
        component: ComponentCreator('/docs/ides/static_for_eclipse/scan_static_eclipse/video_scan_static_eclipse', '5ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/', 'bde'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/install_static_intellij_android/',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/install_static_intellij_android/', '004'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/install_static_intellij_android/install_static_intellij_proxy',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/install_static_intellij_android/install_static_intellij_proxy', 'fdb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/install_static_intellij_android/uninstall_static_intellij',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/install_static_intellij_android/uninstall_static_intellij', 'ad0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/install_static_intellij_android/video_installing_static_intellij',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/install_static_intellij_android/video_installing_static_intellij', 'ef4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/manage_creds_static_intellij_android/',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/manage_creds_static_intellij_android/', '9d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/manage_creds_static_intellij_android/change_password_intellij',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/manage_creds_static_intellij_android/change_password_intellij', '5ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/manage_creds_static_intellij_android/reset_password_static_intellij',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/manage_creds_static_intellij_android/reset_password_static_intellij', '911'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/manage_results_static_intellij_android/',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/manage_results_static_intellij_android/', 'd25'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/manage_results_static_intellij_android/import_results_static_intellij_api',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/manage_results_static_intellij_android/import_results_static_intellij_api', '780'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/manage_results_static_intellij_android/import_results_static_intellij_platform',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/manage_results_static_intellij_android/import_results_static_intellij_platform', '4f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/manage_results_static_intellij_android/mitigate_flaws_static_intellij',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/manage_results_static_intellij_android/mitigate_flaws_static_intellij', '0bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/manage_results_static_intellij_android/video_work_with_results_static_intellij',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/manage_results_static_intellij_android/video_work_with_results_static_intellij', '201'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/manage_results_static_intellij_android/view_call_stacks_static_intellij',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/manage_results_static_intellij_android/view_call_stacks_static_intellij', 'c5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/manage_results_static_intellij_android/view_flaw_details_static_intellij',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/manage_results_static_intellij_android/view_flaw_details_static_intellij', '52b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/scan_static_intellij_android/',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/scan_static_intellij_android/', '327'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/scan_static_intellij_android/debug_prescan_static_intellij',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/scan_static_intellij_android/debug_prescan_static_intellij', 'c4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/scan_static_intellij_android/run_prescan_static_intellij',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/scan_static_intellij_android/run_prescan_static_intellij', 'b3e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/scan_static_intellij_android/upload_files_sandbox_static_intellij',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/scan_static_intellij_android/upload_files_sandbox_static_intellij', '580'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_intellij_android_studio/scan_static_intellij_android/video_upload_files_static_intellij',
        component: ComponentCreator('/docs/ides/static_for_intellij_android_studio/scan_static_intellij_android/video_upload_files_static_intellij', '0e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/', 'bd8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/configure_static_vs_legacy/',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/configure_static_vs_legacy/', '160'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/configure_static_vs_legacy/configure_precomp_static_vs_legacy',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/configure_static_vs_legacy/configure_precomp_static_vs_legacy', '2e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/configure_static_vs_legacy/configure_proxy_static_vs_legacy',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/configure_static_vs_legacy/configure_proxy_static_vs_legacy', '952'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/configure_static_vs_legacy/msbuild_paths_static_vs_legacy/',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/configure_static_vs_legacy/msbuild_paths_static_vs_legacy/', '0e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/configure_static_vs_legacy/msbuild_paths_static_vs_legacy/msbuild_paths_vs2015_legacy',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/configure_static_vs_legacy/msbuild_paths_static_vs_legacy/msbuild_paths_vs2015_legacy', '5fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/configure_static_vs_legacy/msbuild_paths_static_vs_legacy/msbuild_paths_vs2017_legacy',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/configure_static_vs_legacy/msbuild_paths_static_vs_legacy/msbuild_paths_vs2017_legacy', '7c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/configure_static_vs_legacy/msbuild_paths_static_vs_legacy/msbuild_paths_vs2019_legacy',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/configure_static_vs_legacy/msbuild_paths_static_vs_legacy/msbuild_paths_vs2019_legacy', '249'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/create_build_static_vs_legacy/',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/create_build_static_vs_legacy/', '1eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/create_build_static_vs_legacy/precompile_manually_static_vs_legacy',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/create_build_static_vs_legacy/precompile_manually_static_vs_legacy', '40f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/fix_static_vs_2019_display_legacy',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/fix_static_vs_2019_display_legacy', '52e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/install_static_vs_legacy/',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/install_static_vs_legacy/', 'dcd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/install_static_vs_legacy/video_install_static_vs_legacy',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/install_static_vs_legacy/video_install_static_vs_legacy', '7fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/manage_results_static_vs_legacy/',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/manage_results_static_vs_legacy/', 'ef4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/manage_results_static_vs_legacy/import_results_api_static_vs_legacy',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/manage_results_static_vs_legacy/import_results_api_static_vs_legacy', 'f31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/manage_results_static_vs_legacy/import_results_platform_static_vs_legacy',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/manage_results_static_vs_legacy/import_results_platform_static_vs_legacy', '10f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/manage_results_static_vs_legacy/mitigate_flaws_static_vs_legacy',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/manage_results_static_vs_legacy/mitigate_flaws_static_vs_legacy', '712'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/manage_results_static_vs_legacy/video_working_results_static_vs_legacy',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/manage_results_static_vs_legacy/video_working_results_static_vs_legacy', 'f84'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/scan_static_vs_legacy/',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/scan_static_vs_legacy/', '5af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/scan_static_vs_legacy/config_sandbox_static_vs_legacy',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/scan_static_vs_legacy/config_sandbox_static_vs_legacy', '912'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/scan_static_vs_legacy/video_build_and_upload_static_vs_legacy',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/scan_static_vs_legacy/video_build_and_upload_static_vs_legacy', 'bab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_legacy/static_vs_prereqs_legacy',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_legacy/static_vs_prereqs_legacy', 'd2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_new/',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_new/', '6f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_new/about_static_vs_2019_2022_new',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_new/about_static_vs_2019_2022_new', 'fe7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_new/config_project_vs_2019_2022_new',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_new/config_project_vs_2019_2022_new', '891'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_new/custom_workflow_visual_studio_new/',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_new/custom_workflow_visual_studio_new/', '87d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_new/custom_workflow_visual_studio_new/change_scan_name_visual_studio_new',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_new/custom_workflow_visual_studio_new/change_scan_name_visual_studio_new', 'f83'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_new/install_static_vs_2019_2022_new',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_new/install_static_vs_2019_2022_new', '11b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_new/one_time_setup_vs_2019_2022_new',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_new/one_time_setup_vs_2019_2022_new', '43c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_new/open_source_scripts_static_vs_2019_2022_new',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_new/open_source_scripts_static_vs_2019_2022_new', 'abf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_new/scan_view_results_vs_2019_2022_new/',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_new/scan_view_results_vs_2019_2022_new/', 'da5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_new/scan_view_results_vs_2019_2022_new/import_scan_results_visual_studio_new',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_new/scan_view_results_vs_2019_2022_new/import_scan_results_visual_studio_new', '7fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_new/settings_scripts_static_vs_2019_2022_new',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_new/settings_scripts_static_vs_2019_2022_new', 'bbf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ides/static_for_visual_studio_new/tshooting_static_vs_2019_2022_new',
        component: ComponentCreator('/docs/ides/static_for_visual_studio_new/tshooting_static_vs_2019_2022_new', '96e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations_troubleshootting/',
        component: ComponentCreator('/docs/integrations_troubleshootting/', '938'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations_troubleshootting/c_tls_support',
        component: ComponentCreator('/docs/integrations_troubleshootting/c_tls_support', 'f99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations_troubleshootting/troubleshoot_apis_integrations/',
        component: ComponentCreator('/docs/integrations_troubleshootting/troubleshoot_apis_integrations/', 'd9f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations_troubleshootting/troubleshoot_apis_integrations/r_troubleshooting_apis',
        component: ComponentCreator('/docs/integrations_troubleshootting/troubleshoot_apis_integrations/r_troubleshooting_apis', '01b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations_troubleshootting/troubleshoot_apis_integrations/r_troubleshooting_build_release',
        component: ComponentCreator('/docs/integrations_troubleshootting/troubleshoot_apis_integrations/r_troubleshooting_build_release', '606'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations_troubleshootting/troubleshoot_apis_integrations/r_troubleshooting_grc',
        component: ComponentCreator('/docs/integrations_troubleshootting/troubleshoot_apis_integrations/r_troubleshooting_grc', 'cc5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations_troubleshootting/troubleshoot_apis_integrations/r_troubleshooting_greenlight',
        component: ComponentCreator('/docs/integrations_troubleshootting/troubleshoot_apis_integrations/r_troubleshooting_greenlight', 'f34'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations_troubleshootting/troubleshoot_apis_integrations/r_troubleshooting_ides',
        component: ComponentCreator('/docs/integrations_troubleshootting/troubleshoot_apis_integrations/r_troubleshooting_ides', 'c66'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations_troubleshootting/troubleshoot_apis_integrations/r_troubleshooting_int',
        component: ComponentCreator('/docs/integrations_troubleshootting/troubleshoot_apis_integrations/r_troubleshooting_int', 'fec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations_troubleshootting/troubleshoot_apis_integrations/r_troubleshooting_sca',
        component: ComponentCreator('/docs/integrations_troubleshootting/troubleshoot_apis_integrations/r_troubleshooting_sca', '3eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations_troubleshootting/troubleshoot_apis_integrations/r_troubleshooting_ticketing',
        component: ComponentCreator('/docs/integrations_troubleshootting/troubleshoot_apis_integrations/r_troubleshooting_ticketing', '50f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations_troubleshootting/using_ssl_certs/',
        component: ComponentCreator('/docs/integrations_troubleshootting/using_ssl_certs/', 'e7d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations_troubleshootting/using_ssl_certs/c_identify_trust_store',
        component: ComponentCreator('/docs/integrations_troubleshootting/using_ssl_certs/c_identify_trust_store', '9d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations_troubleshootting/using_ssl_certs/t_import_certificate',
        component: ComponentCreator('/docs/integrations_troubleshootting/using_ssl_certs/t_import_certificate', '636'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations_troubleshootting/using_ssl_certs/t_obtain_certificate_chrome',
        component: ComponentCreator('/docs/integrations_troubleshootting/using_ssl_certs/t_obtain_certificate_chrome', '19e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations_troubleshootting/using_ssl_certs/t_obtain_certificate_firefox',
        component: ComponentCreator('/docs/integrations_troubleshootting/using_ssl_certs/t_obtain_certificate_firefox', 'da6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/integrations_troubleshootting/using_ssl_certs/t_obtain_certificate_ie',
        component: ComponentCreator('/docs/integrations_troubleshootting/using_ssl_certs/t_obtain_certificate_ie', 'b35'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/',
        component: ComponentCreator('/docs/ism/', '9fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/about_ism',
        component: ComponentCreator('/docs/ism/about_ism', '4a7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/about_ism_gateway_retention',
        component: ComponentCreator('/docs/ism/about_ism_gateway_retention', 'f5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/add_endpoint_to_gateway',
        component: ComponentCreator('/docs/ism/add_endpoint_to_gateway', '728'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/best_practices_endpoint_management',
        component: ComponentCreator('/docs/ism/best_practices_endpoint_management', 'c42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/best_practices_gateway_management',
        component: ComponentCreator('/docs/ism/best_practices_gateway_management', '761'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/configure_internal_scanning',
        component: ComponentCreator('/docs/ism/configure_internal_scanning', '01b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/configure_ism_endpoint_access',
        component: ComponentCreator('/docs/ism/configure_ism_endpoint_access', 'ce6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/delete_gateway',
        component: ComponentCreator('/docs/ism/delete_gateway', 'e3a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/delete_ism_endpoint',
        component: ComponentCreator('/docs/ism/delete_ism_endpoint', 'a4e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/edit_ism_endpoint',
        component: ComponentCreator('/docs/ism/edit_ism_endpoint', 'dcc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/ism_endpoint_installer',
        component: ComponentCreator('/docs/ism/ism_endpoint_installer', 'f1a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/ism_endpoint_release_history',
        component: ComponentCreator('/docs/ism/ism_endpoint_release_history', 'd90'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/ism_notifications',
        component: ComponentCreator('/docs/ism/ism_notifications', '7d9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/ism_prerequisites',
        component: ComponentCreator('/docs/ism/ism_prerequisites', '868'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/manually_install_endpoint',
        component: ComponentCreator('/docs/ism/manually_install_endpoint', '95c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/manually_update_endpoint',
        component: ComponentCreator('/docs/ism/manually_update_endpoint', '983'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/test_ism_endpoint_diagnostic/',
        component: ComponentCreator('/docs/ism/test_ism_endpoint_diagnostic/', 'f31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/test_ism_endpoint_diagnostic/ism_diagnostic_parameters',
        component: ComponentCreator('/docs/ism/test_ism_endpoint_diagnostic/ism_diagnostic_parameters', '5b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/test_ism_endpoint_diagnostic/ism_diagnostic_results',
        component: ComponentCreator('/docs/ism/test_ism_endpoint_diagnostic/ism_diagnostic_results', 'ad7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/troubleshooting_configuration_ism_endpoint_installer',
        component: ComponentCreator('/docs/ism/troubleshooting_configuration_ism_endpoint_installer', 'e6c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/troubleshooting_ism',
        component: ComponentCreator('/docs/ism/troubleshooting_ism', '0cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/uninstall_ism_endpoint',
        component: ComponentCreator('/docs/ism/uninstall_ism_endpoint', '191'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/update_ism_endpoint',
        component: ComponentCreator('/docs/ism/update_ism_endpoint', '55f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/video_install_endpoint_ism_installer',
        component: ComponentCreator('/docs/ism/video_install_endpoint_ism_installer', 'f3b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ism/view_ism_endpoint_logs',
        component: ComponentCreator('/docs/ism/view_ism_endpoint_logs', '4e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Mobile/',
        component: ComponentCreator('/docs/Mobile/', 'be6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Mobile/understanding_mobile/',
        component: ComponentCreator('/docs/Mobile/understanding_mobile/', '055'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Mobile/understanding_mobile/using_mobile_analysis',
        component: ComponentCreator('/docs/Mobile/understanding_mobile/using_mobile_analysis', '969'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/MPT/',
        component: ComponentCreator('/docs/MPT/', '9da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/MPT/devops_penetration_testing',
        component: ComponentCreator('/docs/MPT/devops_penetration_testing', '745'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/MPT/focused_mpt',
        component: ComponentCreator('/docs/MPT/focused_mpt', '8c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/MPT/request_manual',
        component: ComponentCreator('/docs/MPT/request_manual', 'f0c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/',
        component: ComponentCreator('/docs/packaging/', '3ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/android',
        component: ComponentCreator('/docs/packaging/android', 'e63'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/apex',
        component: ComponentCreator('/docs/packaging/apex', '9fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/ASPclassic',
        component: ComponentCreator('/docs/packaging/ASPclassic', 'd56'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/CF',
        component: ComponentCreator('/docs/packaging/CF', 'f33'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/cobol',
        component: ComponentCreator('/docs/packaging/cobol', '312'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/cplusplus',
        component: ComponentCreator('/docs/packaging/cplusplus', '8f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/go',
        component: ComponentCreator('/docs/packaging/go', 'd84'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/groovy',
        component: ComponentCreator('/docs/packaging/groovy', 'abd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/ionic_framework',
        component: ComponentCreator('/docs/packaging/ionic_framework', '4b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/ios_tvos/',
        component: ComponentCreator('/docs/packaging/ios_tvos/', 'cb5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/ios_tvos/resolve_missing_bitcode_ios/',
        component: ComponentCreator('/docs/packaging/ios_tvos/resolve_missing_bitcode_ios/', 'e17'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/ios_tvos/resolve_missing_bitcode_ios/c_replace_library_conditionals',
        component: ComponentCreator('/docs/packaging/ios_tvos/resolve_missing_bitcode_ios/c_replace_library_conditionals', '17f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/ios_tvos/resolve_missing_bitcode_ios/t_use_mock_framework',
        component: ComponentCreator('/docs/packaging/ios_tvos/resolve_missing_bitcode_ios/t_use_mock_framework', '75f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/java',
        component: ComponentCreator('/docs/packaging/java', '6cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/jscript',
        component: ComponentCreator('/docs/packaging/jscript', 'c39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/kotlin',
        component: ComponentCreator('/docs/packaging/kotlin', 'a7e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/lambda_layers',
        component: ComponentCreator('/docs/packaging/lambda_layers', '692'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/net/',
        component: ComponentCreator('/docs/packaging/net/', 'd7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/net/asp_net_web_apps/',
        component: ComponentCreator('/docs/packaging/net/asp_net_web_apps/', 'e91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/net/asp_net_web_apps/c_comp_troubleshoot',
        component: ComponentCreator('/docs/packaging/net/asp_net_web_apps/c_comp_troubleshoot', '98f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/net/asp_net_web_apps/c_precomp_MS',
        component: ComponentCreator('/docs/packaging/net/asp_net_web_apps/c_precomp_MS', 'bac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/net/asp_net_web_apps/c_precomp_VS',
        component: ComponentCreator('/docs/packaging/net/asp_net_web_apps/c_precomp_VS', '542'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/net/asp_net_web_apps/t_MVC2_VS',
        component: ComponentCreator('/docs/packaging/net/asp_net_web_apps/t_MVC2_VS', '00f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/net/asp_net_web_apps/t_package_VS_19',
        component: ComponentCreator('/docs/packaging/net/asp_net_web_apps/t_package_VS_19', '047'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/perl',
        component: ComponentCreator('/docs/packaging/perl', 'd7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/phonegap',
        component: ComponentCreator('/docs/packaging/phonegap', '0c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/php',
        component: ComponentCreator('/docs/packaging/php', 'f8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/plsql',
        component: ComponentCreator('/docs/packaging/plsql', '3c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/python',
        component: ComponentCreator('/docs/packaging/python', '796'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/r_supported_table',
        component: ComponentCreator('/docs/packaging/r_supported_table', 'd21'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/react',
        component: ComponentCreator('/docs/packaging/react', 'ef0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/rpg',
        component: ComponentCreator('/docs/packaging/rpg', 'd0d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/ruby',
        component: ComponentCreator('/docs/packaging/ruby', '1f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/scala',
        component: ComponentCreator('/docs/packaging/scala', '570'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/sql',
        component: ComponentCreator('/docs/packaging/sql', '65c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/supported_framworks_cleansers/',
        component: ComponentCreator('/docs/packaging/supported_framworks_cleansers/', '182'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/supported_framworks_cleansers/customcleansers/',
        component: ComponentCreator('/docs/packaging/supported_framworks_cleansers/customcleansers/', '4ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/supported_framworks_cleansers/customcleansers/annotate_java_code',
        component: ComponentCreator('/docs/packaging/supported_framworks_cleansers/customcleansers/annotate_java_code', '2e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/supported_framworks_cleansers/customcleansers/annotate_net_code',
        component: ComponentCreator('/docs/packaging/supported_framworks_cleansers/customcleansers/annotate_net_code', 'bc8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/supported_framworks_cleansers/review_cleansers/',
        component: ComponentCreator('/docs/packaging/supported_framworks_cleansers/review_cleansers/', 'f48'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/supported_framworks_cleansers/review_cleansers/supported_c_cleansing',
        component: ComponentCreator('/docs/packaging/supported_framworks_cleansers/review_cleansers/supported_c_cleansing', 'eed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/supported_framworks_cleansers/review_cleansers/supported_classic_asp_cleansing',
        component: ComponentCreator('/docs/packaging/supported_framworks_cleansers/review_cleansers/supported_classic_asp_cleansing', 'edf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/supported_framworks_cleansers/review_cleansers/supported_coldfusion_cleansing',
        component: ComponentCreator('/docs/packaging/supported_framworks_cleansers/review_cleansers/supported_coldfusion_cleansing', 'cab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/supported_framworks_cleansers/review_cleansers/supported_java_cleansing',
        component: ComponentCreator('/docs/packaging/supported_framworks_cleansers/review_cleansers/supported_java_cleansing', '909'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/supported_framworks_cleansers/review_cleansers/supported_net_cleansing',
        component: ComponentCreator('/docs/packaging/supported_framworks_cleansers/review_cleansers/supported_net_cleansing', 'a68'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/supported_framworks_cleansers/review_cleansers/supported_perl_cleansing',
        component: ComponentCreator('/docs/packaging/supported_framworks_cleansers/review_cleansers/supported_perl_cleansing', 'cb1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/supported_framworks_cleansers/review_cleansers/supported_php_cleansing',
        component: ComponentCreator('/docs/packaging/supported_framworks_cleansers/review_cleansers/supported_php_cleansing', 'b86'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/supported_framworks_cleansers/review_cleansers/supported_ruby_cleansing',
        component: ComponentCreator('/docs/packaging/supported_framworks_cleansers/review_cleansers/supported_ruby_cleansing', 'fd5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/titan',
        component: ComponentCreator('/docs/packaging/titan', 'c9d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/understanding_packaging/',
        component: ComponentCreator('/docs/packaging/understanding_packaging/', '446'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/understanding_packaging/c_comp_quickref',
        component: ComponentCreator('/docs/packaging/understanding_packaging/c_comp_quickref', '6d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/understanding_packaging/initial_full_support',
        component: ComponentCreator('/docs/packaging/understanding_packaging/initial_full_support', '54b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/vb6',
        component: ComponentCreator('/docs/packaging/vb6', 'e08'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/winccpp',
        component: ComponentCreator('/docs/packaging/winccpp', 'bdf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/packaging/xamarin',
        component: ComponentCreator('/docs/packaging/xamarin', '041'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/',
        component: ComponentCreator('/docs/pipeline_scan/', 'cef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/c_pipeline_scan_config_scenarios',
        component: ComponentCreator('/docs/pipeline_scan/c_pipeline_scan_config_scenarios', 'ae3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/c_pipeline_scan_logging',
        component: ComponentCreator('/docs/pipeline_scan/c_pipeline_scan_logging', '869'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/c_using_policies_with_pipeline_scan',
        component: ComponentCreator('/docs/pipeline_scan/c_using_policies_with_pipeline_scan', 'b14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/getstarted_pipeline_scan/',
        component: ComponentCreator('/docs/pipeline_scan/getstarted_pipeline_scan/', '578'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/getstarted_pipeline_scan/c_about_pipeline_baseline_file',
        component: ComponentCreator('/docs/pipeline_scan/getstarted_pipeline_scan/c_about_pipeline_baseline_file', '360'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/getstarted_pipeline_scan/c_pipeline_scan_prereqs',
        component: ComponentCreator('/docs/pipeline_scan/getstarted_pipeline_scan/c_pipeline_scan_prereqs', 'd41'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/getstarted_pipeline_scan/c_video_run_a_pipeline_scan',
        component: ComponentCreator('/docs/pipeline_scan/getstarted_pipeline_scan/c_video_run_a_pipeline_scan', '427'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/getstarted_pipeline_scan/t_download_pipeline_scan',
        component: ComponentCreator('/docs/pipeline_scan/getstarted_pipeline_scan/t_download_pipeline_scan', '914'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/getstarted_pipeline_scan/t_run_first_pipeline_scans_desktop',
        component: ComponentCreator('/docs/pipeline_scan/getstarted_pipeline_scan/t_run_first_pipeline_scans_desktop', 'a6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/getstarted_pipeline_scan/t_run_pipeline_scan',
        component: ComponentCreator('/docs/pipeline_scan/getstarted_pipeline_scan/t_run_pipeline_scan', '73a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_azure_examples/',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_azure_examples/', '69a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_azure_examples/r_azure_baseline_file_example',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_azure_examples/r_azure_baseline_file_example', 'e49'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_azure_examples/r_azure_pipeline_yaml_example_dotnet',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_azure_examples/r_azure_pipeline_yaml_example_dotnet', '932'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_azure_examples/r_azure_scan_maven_example',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_azure_examples/r_azure_scan_maven_example', '895'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_azure_examples/r_azure_scan_yaml_pipeline_gradle_example',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_azure_examples/r_azure_scan_yaml_pipeline_gradle_example', 'ccd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_github_examples/',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_github_examples/', 'b64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_github_examples/r_github_baseline_example',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_github_examples/r_github_baseline_example', '936'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_github_examples/r_github_gradle_example',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_github_examples/r_github_gradle_example', '408'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_github_examples/r_github_maven_example',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_github_examples/r_github_maven_example', '317'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_gitlab_examples/',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_gitlab_examples/', '7d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_gitlab_examples/r_gitlab_gradle',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_gitlab_examples/r_gitlab_gradle', 'a1d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_gitlab_examples/r_gitlab_gradle_example',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_gitlab_examples/r_gitlab_gradle_example', 'e12'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_gitlab_examples/r_gitlab_gradle_vulnerability_custom_policy',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_gitlab_examples/r_gitlab_gradle_vulnerability_custom_policy', 'd48'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_gitlab_examples/r_gitlab_gradle_vulnerability_example',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_gitlab_examples/r_gitlab_gradle_vulnerability_example', 'ab2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_gitlab_examples/r_gitlab_maven',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_gitlab_examples/r_gitlab_maven', '49d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_gitlab_examples/r_gitlab_pipeline_scan_baseline',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_gitlab_examples/r_gitlab_pipeline_scan_baseline', 'cda'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_gitlab_examples/r_gitlab_vulnerability_gen_built_in',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_gitlab_examples/r_gitlab_vulnerability_gen_built_in', '237'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_gitlab_examples/t_set_access_token_gitlab',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_gitlab_examples/t_set_access_token_gitlab', '890'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_gitlab_examples/t_set_gitlab_environment_variables',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_gitlab_examples/t_set_gitlab_environment_variables', '4ce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_jenkins_examples/',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_jenkins_examples/', 'dd2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_jenkins_examples/r_jenkins_baseline',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_jenkins_examples/r_jenkins_baseline', '868'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_jenkins_examples/r_jenkins_gradle',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_jenkins_examples/r_jenkins_gradle', 'b81'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/pipeline_scan_jenkins_examples/r_jenkins_maven',
        component: ComponentCreator('/docs/pipeline_scan/pipeline_scan_jenkins_examples/r_jenkins_maven', 'd7b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/r_pipeline_scan_commands',
        component: ComponentCreator('/docs/pipeline_scan/r_pipeline_scan_commands', 'fb9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/r_pipeline_scan_examples',
        component: ComponentCreator('/docs/pipeline_scan/r_pipeline_scan_examples', 'fd5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/r_pipeline_scan_output',
        component: ComponentCreator('/docs/pipeline_scan/r_pipeline_scan_output', '6b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pipeline_scan/r_pipeline_scan_status_codes',
        component: ComponentCreator('/docs/pipeline_scan/r_pipeline_scan_status_codes', 'aac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/',
        component: ComponentCreator('/docs/policies/', '6b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/blocklist',
        component: ComponentCreator('/docs/policies/blocklist', '8d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/copy',
        component: ComponentCreator('/docs/policies/copy', '5cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/create_policy/',
        component: ComponentCreator('/docs/policies/create_policy/', '22e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/create_policy/video_create_policy',
        component: ComponentCreator('/docs/policies/create_policy/video_create_policy', '927'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/delete',
        component: ComponentCreator('/docs/policies/delete', '701'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/edit',
        component: ComponentCreator('/docs/policies/edit', '335'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/enforcing_sec',
        component: ComponentCreator('/docs/policies/enforcing_sec', 'd72'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/grace_period/',
        component: ComponentCreator('/docs/policies/grace_period/', '470'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/grace_period/policy_sca_grace_periods',
        component: ComponentCreator('/docs/policies/grace_period/policy_sca_grace_periods', '704'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/notifications',
        component: ComponentCreator('/docs/policies/notifications', '6c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/policy_app',
        component: ComponentCreator('/docs/policies/policy_app', 'cbb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/policy_control_report',
        component: ComponentCreator('/docs/policies/policy_control_report', 'aaa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/policy_custom_severities',
        component: ComponentCreator('/docs/policies/policy_custom_severities', 'b97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/policy_eval_time',
        component: ComponentCreator('/docs/policies/policy_eval_time', 'e75'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/policy_rules',
        component: ComponentCreator('/docs/policies/policy_rules', '86a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/policy_scan_reqs',
        component: ComponentCreator('/docs/policies/policy_scan_reqs', '336'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/sca_policy',
        component: ComponentCreator('/docs/policies/sca_policy', '460'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/setdefaults',
        component: ComponentCreator('/docs/policies/setdefaults', '0c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/understand',
        component: ComponentCreator('/docs/policies/understand', '775'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/veracodedefault',
        component: ComponentCreator('/docs/policies/veracodedefault', '399'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/policies/veracodelevel',
        component: ComponentCreator('/docs/policies/veracodelevel', 'cfa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/',
        component: ComponentCreator('/docs/release_notes/', '3c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/euregion/',
        component: ComponentCreator('/docs/release_notes/euregion/', '499'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/euregion/all_eu',
        component: ComponentCreator('/docs/release_notes/euregion/all_eu', '509'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/usregion/',
        component: ComponentCreator('/docs/release_notes/usregion/', 'e7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/usregion/08_2021/',
        component: ComponentCreator('/docs/release_notes/usregion/08_2021/', 'b98'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/usregion/08_2021/past_appsec_platform',
        component: ComponentCreator('/docs/release_notes/usregion/08_2021/past_appsec_platform', 'f1b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/usregion/08_2021/past_dynamic',
        component: ComponentCreator('/docs/release_notes/usregion/08_2021/past_dynamic', 'bc6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/usregion/08_2021/past_integrations',
        component: ComponentCreator('/docs/release_notes/usregion/08_2021/past_integrations', '11b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/usregion/08_2021/past_SCA',
        component: ComponentCreator('/docs/release_notes/usregion/08_2021/past_SCA', 'f6b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/usregion/08_2021/past_static',
        component: ComponentCreator('/docs/release_notes/usregion/08_2021/past_static', 'e84'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/usregion/08_2021/past_training',
        component: ComponentCreator('/docs/release_notes/usregion/08_2021/past_training', 'b28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/usregion/09_2020/',
        component: ComponentCreator('/docs/release_notes/usregion/09_2020/', 'bf8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/usregion/09_2020/01_2020_rns',
        component: ComponentCreator('/docs/release_notes/usregion/09_2020/01_2020_rns', '8cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/usregion/all_appsec_platform',
        component: ComponentCreator('/docs/release_notes/usregion/all_appsec_platform', '1a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/usregion/all_dynamic',
        component: ComponentCreator('/docs/release_notes/usregion/all_dynamic', 'ed7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/usregion/all_integrations',
        component: ComponentCreator('/docs/release_notes/usregion/all_integrations', '588'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/usregion/all_SCA',
        component: ComponentCreator('/docs/release_notes/usregion/all_SCA', '7a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/usregion/all_static',
        component: ComponentCreator('/docs/release_notes/usregion/all_static', '665'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/usregion/all_training',
        component: ComponentCreator('/docs/release_notes/usregion/all_training', 'a1d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/release_notes/usregion/usregion_intro',
        component: ComponentCreator('/docs/release_notes/usregion/usregion_intro', 'fb8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/',
        component: ComponentCreator('/docs/results_reports/', '527'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/about_summarized_results',
        component: ComponentCreator('/docs/results_reports/about_summarized_results', 'ba1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/accessing_veracode_reports/',
        component: ComponentCreator('/docs/results_reports/accessing_veracode_reports/', '683'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/accessing_veracode_reports/download_customizable_report',
        component: ComponentCreator('/docs/results_reports/accessing_veracode_reports/download_customizable_report', '547'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/accessing_veracode_reports/download_detailed_veracode_report',
        component: ComponentCreator('/docs/results_reports/accessing_veracode_reports/download_detailed_veracode_report', '300'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/accessing_veracode_reports/download_pci_report',
        component: ComponentCreator('/docs/results_reports/accessing_veracode_reports/download_pci_report', '8a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/accessing_veracode_reports/download_summary_report',
        component: ComponentCreator('/docs/results_reports/accessing_veracode_reports/download_summary_report', '66e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/accessing_veracode_reports/reviewing_assessment_summary',
        component: ComponentCreator('/docs/results_reports/accessing_veracode_reports/reviewing_assessment_summary', '815'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/accessing_veracode_reports/share_reports_from_platform',
        component: ComponentCreator('/docs/results_reports/accessing_veracode_reports/share_reports_from_platform', '3f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/accessing_veracode_reports/summarized_results',
        component: ComponentCreator('/docs/results_reports/accessing_veracode_reports/summarized_results', 'a5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/accessing_veracode_reports/understanding_customizable_report',
        component: ComponentCreator('/docs/results_reports/accessing_veracode_reports/understanding_customizable_report', '8df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/accessing_veracode_reports/xml_report/',
        component: ComponentCreator('/docs/results_reports/accessing_veracode_reports/xml_report/', '370'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/accessing_veracode_reports/xml_report/understanding_data_in__XML_report',
        component: ComponentCreator('/docs/results_reports/accessing_veracode_reports/xml_report/understanding_data_in__XML_report', '5f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/',
        component: ComponentCreator('/docs/results_reports/improve/', '1da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/developing_remediation_plan',
        component: ComponentCreator('/docs/results_reports/improve/developing_remediation_plan', '358'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/generate_link_to_latest_instance_of_flaw',
        component: ComponentCreator('/docs/results_reports/improve/generate_link_to_latest_instance_of_flaw', '8fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/improve_mitigation/',
        component: ComponentCreator('/docs/results_reports/improve/improve_mitigation/', 'ca9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/improve_mitigation/accept_reject_mitigations_mitigated_flaws',
        component: ComponentCreator('/docs/results_reports/improve/improve_mitigation/accept_reject_mitigations_mitigated_flaws', '650'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/improve_mitigation/accept_reject_mitigations_triage',
        component: ComponentCreator('/docs/results_reports/improve/improve_mitigation/accept_reject_mitigations_triage', '4e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/improve_mitigation/accepting_rejecting_mitigations',
        component: ComponentCreator('/docs/results_reports/improve/improve_mitigation/accepting_rejecting_mitigations', '1da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/improve_mitigation/comment_on_flaws',
        component: ComponentCreator('/docs/results_reports/improve/improve_mitigation/comment_on_flaws', '2cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/improve_mitigation/managing_mitigations_several_flaws',
        component: ComponentCreator('/docs/results_reports/improve/improve_mitigation/managing_mitigations_several_flaws', '206'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/improve_mitigation/perform_multiple_changes_triage',
        component: ComponentCreator('/docs/results_reports/improve/improve_mitigation/perform_multiple_changes_triage', 'ece'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/improve_mitigation/perform_multiples_changes_mitigated_flaws',
        component: ComponentCreator('/docs/results_reports/improve/improve_mitigation/perform_multiples_changes_mitigated_flaws', 'dce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/improve_mitigation/propose_mitigating_factors',
        component: ComponentCreator('/docs/results_reports/improve/improve_mitigation/propose_mitigating_factors', 'dbf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/improve_mitigation/reviewing_flaws_as_team',
        component: ComponentCreator('/docs/results_reports/improve/improve_mitigation/reviewing_flaws_as_team', '34b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/improve_mitigation/reviewing_user_feedback_on_flaw',
        component: ComponentCreator('/docs/results_reports/improve/improve_mitigation/reviewing_user_feedback_on_flaw', 'db2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/improve_mitigation/view_mitigated_flaws_reports',
        component: ComponentCreator('/docs/results_reports/improve/improve_mitigation/view_mitigated_flaws_reports', 'a26'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/matching_flaws_between_scans',
        component: ComponentCreator('/docs/results_reports/improve/matching_flaws_between_scans', '4a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/review_third_party_app_vendor',
        component: ComponentCreator('/docs/results_reports/improve/review_third_party_app_vendor', 'af8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/schedule_consultation',
        component: ComponentCreator('/docs/results_reports/improve/schedule_consultation', 'c0b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/schedule_next_day_consultation',
        component: ComponentCreator('/docs/results_reports/improve/schedule_next_day_consultation', 'aae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/searching_for_specific_flaw',
        component: ComponentCreator('/docs/results_reports/improve/searching_for_specific_flaw', 'e9d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/understanding_veracode_mprs',
        component: ComponentCreator('/docs/results_reports/improve/understanding_veracode_mprs', '22a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/verifying_your_fixes',
        component: ComponentCreator('/docs/results_reports/improve/verifying_your_fixes', 'a63'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/improve/working_collaboratively_in_triage_flaws',
        component: ComponentCreator('/docs/results_reports/improve/working_collaboratively_in_triage_flaws', '9f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_methodology/',
        component: ComponentCreator('/docs/results_reports/review_methodology/', '103'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_methodology/best_practice_findings',
        component: ComponentCreator('/docs/results_reports/review_methodology/best_practice_findings', '606'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_methodology/business_criticality',
        component: ComponentCreator('/docs/results_reports/review_methodology/business_criticality', '74b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_methodology/cwes_impact_policy/',
        component: ComponentCreator('/docs/results_reports/review_methodology/cwes_impact_policy/', '582'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_methodology/cwes_impact_policy/cwes_cert',
        component: ComponentCreator('/docs/results_reports/review_methodology/cwes_impact_policy/cwes_cert', '994'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_methodology/cwes_impact_policy/cwes_cwe_25_2019',
        component: ComponentCreator('/docs/results_reports/review_methodology/cwes_impact_policy/cwes_cwe_25_2019', '053'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_methodology/cwes_impact_policy/cwes_cwe_25_2020',
        component: ComponentCreator('/docs/results_reports/review_methodology/cwes_impact_policy/cwes_cwe_25_2020', '4e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_methodology/cwes_impact_policy/cwes_cwe_25_2022',
        component: ComponentCreator('/docs/results_reports/review_methodology/cwes_impact_policy/cwes_cwe_25_2022', 'c0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_methodology/cwes_impact_policy/cwes_owasp_2017',
        component: ComponentCreator('/docs/results_reports/review_methodology/cwes_impact_policy/cwes_owasp_2017', 'bf6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_methodology/cwes_impact_policy/cwes_owasp_2021',
        component: ComponentCreator('/docs/results_reports/review_methodology/cwes_impact_policy/cwes_owasp_2021', '2da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_methodology/cwes_impact_policy/cwes_owasp_mobile',
        component: ComponentCreator('/docs/results_reports/review_methodology/cwes_impact_policy/cwes_owasp_mobile', '2af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_methodology/flaw_methodology',
        component: ComponentCreator('/docs/results_reports/review_methodology/flaw_methodology', '369'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_methodology/policy_evaluation',
        component: ComponentCreator('/docs/results_reports/review_methodology/policy_evaluation', '0af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_methodology/reviewing_flaw_sources',
        component: ComponentCreator('/docs/results_reports/review_methodology/reviewing_flaw_sources', 'b11'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_methodology/scoring_methodology',
        component: ComponentCreator('/docs/results_reports/review_methodology/scoring_methodology', '940'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_methodology/understanding_severity_exploitability_effort',
        component: ComponentCreator('/docs/results_reports/review_methodology/understanding_severity_exploitability_effort', '3dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_methodology/understanding_veracode_and_cwe',
        component: ComponentCreator('/docs/results_reports/review_methodology/understanding_veracode_and_cwe', '9b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_static_flaw_viewer/',
        component: ComponentCreator('/docs/results_reports/review_static_flaw_viewer/', '631'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_static_flaw_viewer/matching_filenames_scans',
        component: ComponentCreator('/docs/results_reports/review_static_flaw_viewer/matching_filenames_scans', '1d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_static_flaw_viewer/reviewing_module_selection',
        component: ComponentCreator('/docs/results_reports/review_static_flaw_viewer/reviewing_module_selection', '407'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_static_flaw_viewer/use_source_code_view',
        component: ComponentCreator('/docs/results_reports/review_static_flaw_viewer/use_source_code_view', '06a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_static_flaw_viewer/using_TSRV_format',
        component: ComponentCreator('/docs/results_reports/review_static_flaw_viewer/using_TSRV_format', '987'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_static_flaw_viewer/video_review_static_flaws',
        component: ComponentCreator('/docs/results_reports/review_static_flaw_viewer/video_review_static_flaws', '360'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_static_flaw_viewer/view_data_path_info_flaws',
        component: ComponentCreator('/docs/results_reports/review_static_flaw_viewer/view_data_path_info_flaws', '031'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_static_flaw_viewer/view_flaws_nondebug_code',
        component: ComponentCreator('/docs/results_reports/review_static_flaw_viewer/view_flaws_nondebug_code', '680'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/review_static_flaw_viewer/view_static_results_application',
        component: ComponentCreator('/docs/results_reports/review_static_flaw_viewer/view_static_results_application', 'f5b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/reviewing_scan_results/',
        component: ComponentCreator('/docs/results_reports/reviewing_scan_results/', '511'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/reviewing_scan_results/c_video_reviewing_scan_results',
        component: ComponentCreator('/docs/results_reports/reviewing_scan_results/c_video_reviewing_scan_results', '72c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/understanding_mpt_results',
        component: ComponentCreator('/docs/results_reports/understanding_mpt_results', '571'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/understanding_scan_results',
        component: ComponentCreator('/docs/results_reports/understanding_scan_results', '213'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/results_reports/view_accelerated_results_for_static',
        component: ComponentCreator('/docs/results_reports/view_accelerated_results_for_static', '41f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Sandbox/',
        component: ComponentCreator('/docs/Sandbox/', 'cc6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Sandbox/c_about_sandbox_data_expiration',
        component: ComponentCreator('/docs/Sandbox/c_about_sandbox_data_expiration', 'bc1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Sandbox/c_about_sandbox/',
        component: ComponentCreator('/docs/Sandbox/c_about_sandbox/', 'fd3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Sandbox/c_about_sandbox/c_sandbox_data_retention',
        component: ComponentCreator('/docs/Sandbox/c_about_sandbox/c_sandbox_data_retention', 'a83'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Sandbox/c_mitigate_sandbox',
        component: ComponentCreator('/docs/Sandbox/c_mitigate_sandbox', '5b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Sandbox/t_create_sandbox',
        component: ComponentCreator('/docs/Sandbox/t_create_sandbox', '904'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Sandbox/t_download_sandbox_activity',
        component: ComponentCreator('/docs/Sandbox/t_download_sandbox_activity', 'd98'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Sandbox/t_promote_sandbox',
        component: ComponentCreator('/docs/Sandbox/t_promote_sandbox', 'b67'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Sandbox/t_review_sandbox_scan_results',
        component: ComponentCreator('/docs/Sandbox/t_review_sandbox_scan_results', '182'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Sandbox/t_start_a_sandbox_scan',
        component: ComponentCreator('/docs/Sandbox/t_start_a_sandbox_scan', '38a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Sandbox/using_dev_sandboxes_ides/',
        component: ComponentCreator('/docs/Sandbox/using_dev_sandboxes_ides/', 'cb3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Sandbox/using_dev_sandboxes_ides/c_about_jenkins_sandbox',
        component: ComponentCreator('/docs/Sandbox/using_dev_sandboxes_ides/c_about_jenkins_sandbox', '1f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Sandbox/using_dev_sandboxes_ides/c_intelliJ_sandbox',
        component: ComponentCreator('/docs/Sandbox/using_dev_sandboxes_ides/c_intelliJ_sandbox', 'ac0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Sandbox/using_dev_sandboxes_ides/t_eclipse_sandbox',
        component: ComponentCreator('/docs/Sandbox/using_dev_sandboxes_ides/t_eclipse_sandbox', '54f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/',
        component: ComponentCreator('/docs/SCA/', '970'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/about_sca_upload_scans',
        component: ComponentCreator('/docs/SCA/about_sca_upload_scans', '556'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/agent_based_scans/',
        component: ComponentCreator('/docs/SCA/agent_based_scans/', '582'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/agent_based_scans/accessing_sca_agent_scanning_platform',
        component: ComponentCreator('/docs/SCA/agent_based_scans/accessing_sca_agent_scanning_platform', '6e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/agent_based_scans/add_teams_sca_workspace',
        component: ComponentCreator('/docs/SCA/agent_based_scans/add_teams_sca_workspace', '6a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/agent_based_scans/automate_security_checks_agent',
        component: ComponentCreator('/docs/SCA/agent_based_scans/automate_security_checks_agent', '69f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/agent_based_scans/create_sca_workspace',
        component: ComponentCreator('/docs/SCA/agent_based_scans/create_sca_workspace', '845'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/agent_based_scans/explore_vulnerability_database',
        component: ComponentCreator('/docs/SCA/agent_based_scans/explore_vulnerability_database', '289'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/agent_based_scans/using_agent_scanning_reports',
        component: ComponentCreator('/docs/SCA/agent_based_scans/using_agent_scanning_reports', 'dfa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/generating_sbom_agent',
        component: ComponentCreator('/docs/SCA/generating_sbom_agent', 'a2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/generating_sbom_upload_scans',
        component: ComponentCreator('/docs/SCA/generating_sbom_upload_scans', '994'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/getting_started_sca/',
        component: ComponentCreator('/docs/SCA/getting_started_sca/', '79c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/getting_started_sca/choose_sca_scan_type',
        component: ComponentCreator('/docs/SCA/getting_started_sca/choose_sca_scan_type', 'be7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/getting_started_sca/integrating_sca_with_tools',
        component: ComponentCreator('/docs/SCA/getting_started_sca/integrating_sca_with_tools', '8ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/getting_started_sca/link_sca_projects_applications',
        component: ComponentCreator('/docs/SCA/getting_started_sca/link_sca_projects_applications', '790'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/getting_started_sca/requesting_sca_upload_scan',
        component: ComponentCreator('/docs/SCA/getting_started_sca/requesting_sca_upload_scan', '211'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/getting_started_sca/start_first_sca_agent_scan',
        component: ComponentCreator('/docs/SCA/getting_started_sca/start_first_sca_agent_scan', '4af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/getting_started_sca/understanding_sca_roles',
        component: ComponentCreator('/docs/SCA/getting_started_sca/understanding_sca_roles', 'e5e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/getting_started_sca/using_best_practices_with_sca/',
        component: ComponentCreator('/docs/SCA/getting_started_sca/using_best_practices_with_sca/', '228'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/getting_started_sca/using_best_practices_with_sca/sca_best_practices_for_cicd',
        component: ComponentCreator('/docs/SCA/getting_started_sca/using_best_practices_with_sca/sca_best_practices_for_cicd', 'af5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/getting_started_sca/using_best_practices_with_sca/sca_best_practices_for_compliance',
        component: ComponentCreator('/docs/SCA/getting_started_sca/using_best_practices_with_sca/sca_best_practices_for_compliance', '458'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/getting_started_sca/using_sca_programming_languages/',
        component: ComponentCreator('/docs/SCA/getting_started_sca/using_sca_programming_languages/', 'e95'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/getting_started_sca/using_sca_programming_languages/about_supported_languages_agent',
        component: ComponentCreator('/docs/SCA/getting_started_sca/using_sca_programming_languages/about_supported_languages_agent', 'd3f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/getting_started_sca/using_sca_programming_languages/understanding_language_support_upload',
        component: ComponentCreator('/docs/SCA/getting_started_sca/using_sca_programming_languages/understanding_language_support_upload', '04a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/getting_started_sca/using_sca_rest_apis',
        component: ComponentCreator('/docs/SCA/getting_started_sca/using_sca_rest_apis', '113'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/getting_started_sca/video_set_up_agent_to_scan_sca',
        component: ComponentCreator('/docs/SCA/getting_started_sca/video_set_up_agent_to_scan_sca', 'd70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/getting_started_sca/video_upload_and_scan_sca',
        component: ComponentCreator('/docs/SCA/getting_started_sca/video_upload_and_scan_sca', '07f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/images/c_integrated_benefits',
        component: ComponentCreator('/docs/SCA/images/c_integrated_benefits', '5e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/images/c_integrated_packaging_requirements',
        component: ComponentCreator('/docs/SCA/images/c_integrated_packaging_requirements', 'f79'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/requesting_sca_upload_scan/',
        component: ComponentCreator('/docs/SCA/requesting_sca_upload_scan/', 'c92'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/requesting_sca_upload_scan/preparing_application_sca_upload_scanning',
        component: ComponentCreator('/docs/SCA/requesting_sca_upload_scan/preparing_application_sca_upload_scanning', 'dfa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/requesting_sca_upload_scan/request_static_scan_configure_options_sca',
        component: ComponentCreator('/docs/SCA/requesting_sca_upload_scan/request_static_scan_configure_options_sca', 'ef0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/requesting_sca_upload_scan/scan_statuses_sca_upload_scans',
        component: ComponentCreator('/docs/SCA/requesting_sca_upload_scan/scan_statuses_sca_upload_scans', 'b7d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/requesting_sca_upload_scan/select_modules_sca_upload_scanning',
        component: ComponentCreator('/docs/SCA/requesting_sca_upload_scan/select_modules_sca_upload_scanning', 'd9e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/requesting_sca_upload_scan/start_sca_upload_scan',
        component: ComponentCreator('/docs/SCA/requesting_sca_upload_scan/start_sca_upload_scan', '089'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/requesting_sca_upload_scan/understanding_prescan_verification_sca_upload',
        component: ComponentCreator('/docs/SCA/requesting_sca_upload_scan/understanding_prescan_verification_sca_upload', 'ad7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/requesting_sca_upload_scan/upload_packaged_application_upload_sca',
        component: ComponentCreator('/docs/SCA/requesting_sca_upload_scan/upload_packaged_application_upload_sca', 'c7f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/requesting_sca_upload_scan/upload_scan_language_matrix',
        component: ComponentCreator('/docs/SCA/requesting_sca_upload_scan/upload_scan_language_matrix', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/', 'f37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/', 'a24'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/bamboo/',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/bamboo/', '34f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/bamboo/configure_bamboo_repository',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/bamboo/configure_bamboo_repository', 'fa4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/bamboo/create_agent_token_atlassian_bamboo',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/bamboo/create_agent_token_atlassian_bamboo', '207'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/bamboo/set_global_variable_atlassian_bamboo',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/bamboo/set_global_variable_atlassian_bamboo', '211'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/bamboo/set_plan_variable_atlassian_bamboo',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/bamboo/set_plan_variable_atlassian_bamboo', '870'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/bitbucket/',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/bitbucket/', '926'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/bitbucket/configuring_pipelines_directory',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/bitbucket/configuring_pipelines_directory', 'bf3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/bitbucket/create_agent_token_bitbucket',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/bitbucket/create_agent_token_bitbucket', '3c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/bitbucket/set_bitbucket_account_variable',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/bitbucket/set_bitbucket_account_variable', 'ad5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/bitbucket/set_bitbucket_repo_variable',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/bitbucket/set_bitbucket_repo_variable', '6ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/circleci/',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/circleci/', 'a7f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/circleci/create_agent_token_circleci',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/circleci/create_agent_token_circleci', '48c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/circleci/set_circleci_environment_variable',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/circleci/set_circleci_environment_variable', '2bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/codeship/',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/codeship/', 'c4a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/codeship/configure_codeship_basic_repo',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/codeship/configure_codeship_basic_repo', 'e90'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/codeship/configure_codeship_pro_project',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/codeship/configure_codeship_pro_project', '071'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/codeship/create_agent_token_codeship',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/codeship/create_agent_token_codeship', '2d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/gitlab/',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/gitlab/', 'f57'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/gitlab/configure_gitlab_environment_variable',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/gitlab/configure_gitlab_environment_variable', '98f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/gitlab/configure_gitlab_repo',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/gitlab/configure_gitlab_repo', '634'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/gitlab/create_agent_token_gitlab',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/gitlab/create_agent_token_gitlab', '4bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/jenkins_hudson/',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/jenkins_hudson/', 'c48'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/jenkins_hudson/agent_jenkins_prerequisites',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/jenkins_hudson/agent_jenkins_prerequisites', 'a76'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/jenkins_hudson/bind_jenkins_environment_variable',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/jenkins_hudson/bind_jenkins_environment_variable', '346'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/jenkins_hudson/configure_agent_jenkins_job',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/jenkins_hudson/configure_agent_jenkins_job', 'b19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/jenkins_hudson/create_agent_token_jenkins',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/jenkins_hudson/create_agent_token_jenkins', 'eeb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/travis_ci/',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/travis_ci/', 'cdf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/travis_ci/configure_travis_repo',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/travis_ci/configure_travis_repo', 'e99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/travis_ci/create_agent_token_travis',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/travis_ci/create_agent_token_travis', '39f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/continuous_integration/travis_ci/set_travis_environment_variable',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/continuous_integration/travis_ci/set_travis_environment_variable', 'd23'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/desktop/',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/desktop/', '62d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/desktop/cli/',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/desktop/cli/', '35e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/desktop/cli/install_sca_agent_powershell',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/desktop/cli/install_sca_agent_powershell', '1ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/desktop/cli/install_sca_cli_agent',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/desktop/cli/install_sca_cli_agent', '9ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/desktop/gradle/',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/desktop/gradle/', '5c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/desktop/gradle/configuring_gradle_plugin',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/desktop/gradle/configuring_gradle_plugin', '7de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/desktop/gradle/set_up_agent_gradle',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/desktop/gradle/set_up_agent_gradle', '864'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/desktop/issues_integration/',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/desktop/issues_integration/', 'd39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/desktop/issues_integration/create_agent_integration_github',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/desktop/issues_integration/create_agent_integration_github', '398'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/desktop/issues_integration/create_agent_integration_jira_cloud',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/desktop/issues_integration/create_agent_integration_jira_cloud', '991'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/desktop/issues_integration/creating_agent_github_issues',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/desktop/issues_integration/creating_agent_github_issues', 'bdb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/desktop/issues_integration/creating_jira_templates_agent',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/desktop/issues_integration/creating_jira_templates_agent', 'af2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/desktop/issues_integration/jira_legacy_integration_sca',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/desktop/issues_integration/jira_legacy_integration_sca', '2a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/desktop/maven/',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/desktop/maven/', '24d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/desktop/maven/configuring_maven_plugin',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/desktop/maven/configuring_maven_plugin', '033'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/setting_up_agent_based_scans/desktop/maven/set_up_agent_maven',
        component: ComponentCreator('/docs/SCA/setting_up_agent_based_scans/desktop/maven/set_up_agent_maven', '904'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/', 'a7d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/about_organization_rules_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/about_organization_rules_agent', '8b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/about_veracode_rules_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/about_veracode_rules_agent', '268'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/about_vulnerability_database',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/about_vulnerability_database', '41f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/configure_organization_rules_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/configure_organization_rules_agent', '711'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/custom_rules_agent/',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/custom_rules_agent/', '507'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/custom_rules_agent/actions_control_agent_custom_rules',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/custom_rules_agent/actions_control_agent_custom_rules', '28f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/custom_rules_agent/adding_removing_rearranging_controls_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/custom_rules_agent/adding_removing_rearranging_controls_agent', '4a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/custom_rules_agent/agent_custom_rule_examples',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/custom_rules_agent/agent_custom_rule_examples', '941'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/custom_rules_agent/conditions_control_agent_custom_rules',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/custom_rules_agent/conditions_control_agent_custom_rules', 'cf1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/custom_rules_agent/create_custom_rule_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/custom_rules_agent/create_custom_rule_agent', 'f13'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/custom_rules_agent/edit_custom_rules_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/custom_rules_agent/edit_custom_rules_agent', 'b28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/custom_rules_agent/properties_control_agent_custom_rules',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/custom_rules_agent/properties_control_agent_custom_rules', '282'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/custom_rules_agent/reset_custom_rules_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/custom_rules_agent/reset_custom_rules_agent', '670'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/custom_rules_agent/structure_agent_custom_rules',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/custom_rules_agent/structure_agent_custom_rules', '21c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/custom_rules_agent/view_rules_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/custom_rules_agent/view_rules_agent', '754'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/deleting_workspaces',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/deleting_workspaces', 'ca8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/faq_for_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/faq_for_agent', '1af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/', '1c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/agent_language_support_matrix',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/agent_language_support_matrix', '1dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/ccpp_sca_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/ccpp_sca_agent', '43a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/go_sca_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/go_sca_agent', '541'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/', '216'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/fix_example_ant_direct',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/fix_example_ant_direct', '6ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/fix_example_gradle_direct',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/fix_example_gradle_direct', 'acb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/fix_example_gradle_transitive',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/fix_example_gradle_transitive', '2b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/fix_example_gradle_vulnerable_method',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/fix_example_gradle_vulnerable_method', '288'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/fix_example_maven_direct',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/fix_example_maven_direct', 'd98'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/fix_example_maven_transitive',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/fix_example_maven_transitive', '5f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/run_agent_scan_ant',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/run_agent_scan_ant', 'c11'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/run_agent_scan_gradle',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/run_agent_scan_gradle', '471'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/run_agent_scan_maven',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/run_agent_scan_maven', 'd1b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/scan_dependency_tree_gradle',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/scan_dependency_tree_gradle', '44a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/scan_dependency_tree_maven',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/java_sca_agent/scan_dependency_tree_maven', '8cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/', '279'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_bower_direct',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_bower_direct', 'ea1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_bower_transitive',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_bower_transitive', '15a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_npm_direct',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_npm_direct', 'd2f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_npm_transitive',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_npm_transitive', '6ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_npm_transitive_no_force',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_npm_transitive_no_force', 'd7f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_npm_vulnerable_method',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_npm_vulnerable_method', '841'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_yarn_direct',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_yarn_direct', '63f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_yarn_transitive',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_yarn_transitive', '99f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_yarn_transitive_earlier',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/fix_example_yarn_transitive_earlier', '23e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/run_agent_scan_bower',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/run_agent_scan_bower', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/run_agent_scan_npm',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/run_agent_scan_npm', '50d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/run_agent_scan_yarn',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/javascript_sca_agent/run_agent_scan_yarn', '8b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/kotlin_sca_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/kotlin_sca_agent', '681'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/net_sca_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/net_sca_agent', 'd8e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/php_sca_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/php_sca_agent', 'e14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/python_sca_agent/',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/python_sca_agent/', 'c54'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/python_sca_agent/fix_example_python_direct',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/python_sca_agent/fix_example_python_direct', '55b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/python_sca_agent/fix_example_python_transitive',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/python_sca_agent/fix_example_python_transitive', '700'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/python_sca_agent/fix_example_python_vulnerable_method',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/python_sca_agent/fix_example_python_vulnerable_method', '1b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/ruby_sca_agent/',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/ruby_sca_agent/', 'b99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/ruby_sca_agent/fix_example_ruby_direct',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/ruby_sca_agent/fix_example_ruby_direct', '694'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/ruby_sca_agent/fix_example_ruby_transitive',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/ruby_sca_agent/fix_example_ruby_transitive', 'b29'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/ruby_sca_agent/fix_example_ruby_vulnerable_method',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/ruby_sca_agent/fix_example_ruby_vulnerable_method', 'cd3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/scala_sca_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/scala_sca_agent', '2ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/scanning_containers_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/scanning_containers_agent', 'a56'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/swift_sca_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/swift_sca_agent', '797'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/validating_fixed_vulnerability',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/validating_fixed_vulnerability', 'c96'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/video_scan_container_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/video_scan_container_agent', '427'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/viewing_agent_scan_results',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/finding_and_fixing_vulnerabilities/viewing_agent_scan_results', '884'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/issue_management/',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/issue_management/', '296'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/issue_management/add_comment_to_issue',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/issue_management/add_comment_to_issue', '51e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/issue_management/export_agent_results',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/issue_management/export_agent_results', '1d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/issue_management/ignore_sca_issues',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/issue_management/ignore_sca_issues', 'ae8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/issue_management/understanding_sca_license_risk',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/issue_management/understanding_sca_license_risk', 'e53'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/issue_management/understanding_tags_branches_sca_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/issue_management/understanding_tags_branches_sca_agent', '75f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/issue_management/unignore_issue_sca',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/issue_management/unignore_issue_sca', '001'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/issue_management/view_comments_on_issue',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/issue_management/view_comments_on_issue', '805'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/issue_management/view_sca_issue_details',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/issue_management/view_sca_issue_details', '204'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/issue_management/view_sca_vulnerability_details',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/issue_management/view_sca_vulnerability_details', '65c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/libraries/',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/libraries/', '699'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/libraries/download_agent_sca_security_report',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/libraries/download_agent_sca_security_report', 'f8e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/libraries/understanding_agent_vulnerabilities',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/libraries/understanding_agent_vulnerabilities', 'ac2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/libraries/unmatched_libraries',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/libraries/unmatched_libraries', 'a9e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/libraries/view_library_details',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/libraries/view_library_details', '79f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/project_management/',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/project_management/', '155'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/project_management/add_webhook_project',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/project_management/add_webhook_project', '8fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/project_management/change_default_branch_sca_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/project_management/change_default_branch_sca_agent', '862'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/project_management/delete_sca_project',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/project_management/delete_sca_project', '4de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/project_management/enable_notifications_watched_projects',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/project_management/enable_notifications_watched_projects', '663'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/project_management/understanding_default_branches_agent_projects',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/project_management/understanding_default_branches_agent_projects', '922'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/project_management/understanding_webhooks',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/project_management/understanding_webhooks', '223'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/project_management/view_sca_project_history',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/project_management/view_sca_project_history', 'f1b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/project_management/watching_sca_project',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/project_management/watching_sca_project', '99d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/sca_agent_json_schema',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/sca_agent_json_schema', '071'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/sca_agent_management/',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/sca_agent_management/', 'e21'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/sca_agent_management/create_sca_agents',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/sca_agent_management/create_sca_agents', '0ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/sca_agent_management/delete_sca_agents',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/sca_agent_management/delete_sca_agents', '126'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/sca_agent_management/regenerate_sca_agent_token',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/sca_agent_management/regenerate_sca_agent_token', '9fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/sca_agent_management/rename_sca_agents',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/sca_agent_management/rename_sca_agents', '04b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/sca_agent_management/view_organization_agents',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/sca_agent_management/view_organization_agents', '237'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/sca_agent_management/view_workspace_agents',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/sca_agent_management/view_workspace_agents', '8f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/scan_directives_agent/',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/scan_directives_agent/', 'e73'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/scan_directives_agent/agent_scan_directives',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/scan_directives_agent/agent_scan_directives', 'f48'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/scan_directives_agent/automatic_pr_scan_directives',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/scan_directives_agent/automatic_pr_scan_directives', 'd98'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/scan_directives_agent/bower_scan_directives',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/scan_directives_agent/bower_scan_directives', 'b20'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/scan_directives_agent/c_cpp_scan_directives',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/scan_directives_agent/c_cpp_scan_directives', '2c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/scan_directives_agent/go_scan_directives',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/scan_directives_agent/go_scan_directives', 'eed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/scan_directives_agent/java_scan_directives',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/scan_directives_agent/java_scan_directives', '5c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/scan_directives_agent/multi_language_scan_directives',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/scan_directives_agent/multi_language_scan_directives', '2b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/scan_directives_agent/net_scan_directives',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/scan_directives_agent/net_scan_directives', '1ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/scan_directives_agent/npm_scan_directives',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/scan_directives_agent/npm_scan_directives', '06d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/scan_directives_agent/php_scan_directives',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/scan_directives_agent/php_scan_directives', '74b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/scan_directives_agent/python_scan_directives',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/scan_directives_agent/python_scan_directives', '473'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/scan_directives_agent/ruby_scan_directives',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/scan_directives_agent/ruby_scan_directives', 'eb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/understanding_agent_evidence',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/understanding_agent_evidence', '2a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/understanding_deployment_agent',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/understanding_deployment_agent', 'efe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/understanding_sca_workspaces',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/understanding_sca_workspaces', 'ea1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/use_latest_cvss_version_sca_rules',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/use_latest_cvss_version_sca_rules', 'b43'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/user_management/',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/user_management/', 'dc2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/user_management/add_teams_workspace',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/user_management/add_teams_workspace', 'fe9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/user_management/remove_teams_workspace',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/user_management/remove_teams_workspace', 'f4f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_my_workspace_sca',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_my_workspace_sca', 'b47'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_sca_agent/',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_sca_agent/', 'c65'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/', '68d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/auto_pull_request_language_support',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/auto_pull_request_language_support', '5b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/configure_agent_auto_pull_requests',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/configure_agent_auto_pull_requests', '83e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/enable_pull_requests_github',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/enable_pull_requests_github', '164'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/enable_pull_requests_gitlab',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/enable_pull_requests_gitlab', '610'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/troubleshooting_auto_prs',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/troubleshooting_auto_prs', 'fcf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/video_enable_pull_requests_github',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/video_enable_pull_requests_github', '1e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/video_enable_pull_requests_gitlab',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/video_enable_pull_requests_gitlab', '732'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/video_update_advisor_agent_auto_prs',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_sca_agent/about_automatic_pull_requests/video_update_advisor_agent_auto_prs', '2d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_sca_agent/configure_update_advisor_sca',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_sca_agent/configure_update_advisor_sca', '602'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_sca_agent/enable_agent_behind_proxy',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_sca_agent/enable_agent_behind_proxy', '995'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_sca_agent/use_agent_scm_other',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_sca_agent/use_agent_scm_other', '782'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_sca_agent/using_agent_ci_script',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_sca_agent/using_agent_ci_script', '348'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_sca_agent/veracode_sca_agent_commands',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_sca_agent/veracode_sca_agent_commands', '4fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_sca_agent/veracode_sca_agent_config_values',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_sca_agent/veracode_sca_agent_config_values', 'e1b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_sca_agent/veracode_sca_agent_env_variables',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_sca_agent/veracode_sca_agent_env_variables', 'fe4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_agent_based_scans/using_sca_agent/veracode_sca_agent_global_options',
        component: ComponentCreator('/docs/SCA/using_agent_based_scans/using_sca_agent/veracode_sca_agent_global_options', '11c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_veracode_sca_upload_scan_results/',
        component: ComponentCreator('/docs/SCA/using_veracode_sca_upload_scan_results/', '1b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_veracode_sca_upload_scan_results/about_sca_remediation_guidance',
        component: ComponentCreator('/docs/SCA/using_veracode_sca_upload_scan_results/about_sca_remediation_guidance', '457'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_veracode_sca_upload_scan_results/address_sca_vulnerabilties',
        component: ComponentCreator('/docs/SCA/using_veracode_sca_upload_scan_results/address_sca_vulnerabilties', '679'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_veracode_sca_upload_scan_results/approve_reject_sca_mitigations',
        component: ComponentCreator('/docs/SCA/using_veracode_sca_upload_scan_results/approve_reject_sca_mitigations', 'ed6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_veracode_sca_upload_scan_results/export_sca_portfolio_results',
        component: ComponentCreator('/docs/SCA/using_veracode_sca_upload_scan_results/export_sca_portfolio_results', '158'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_veracode_sca_upload_scan_results/include_sca_findings_in_policy',
        component: ComponentCreator('/docs/SCA/using_veracode_sca_upload_scan_results/include_sca_findings_in_policy', '05a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_veracode_sca_upload_scan_results/meeting_sca_policy_compliance',
        component: ComponentCreator('/docs/SCA/using_veracode_sca_upload_scan_results/meeting_sca_policy_compliance', 'c00'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_veracode_sca_upload_scan_results/mitigate_license_risk_sca',
        component: ComponentCreator('/docs/SCA/using_veracode_sca_upload_scan_results/mitigate_license_risk_sca', 'e88'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_veracode_sca_upload_scan_results/mitigating_sca_vulnerabilities_licenses',
        component: ComponentCreator('/docs/SCA/using_veracode_sca_upload_scan_results/mitigating_sca_vulnerabilities_licenses', '3a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_veracode_sca_upload_scan_results/reviewing_sca_license_data',
        component: ComponentCreator('/docs/SCA/using_veracode_sca_upload_scan_results/reviewing_sca_license_data', '93e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_veracode_sca_upload_scan_results/using_application_data_sca',
        component: ComponentCreator('/docs/SCA/using_veracode_sca_upload_scan_results/using_application_data_sca', '675'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_veracode_sca_upload_scan_results/using_cvss_versions',
        component: ComponentCreator('/docs/SCA/using_veracode_sca_upload_scan_results/using_cvss_versions', 'e99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_veracode_sca_upload_scan_results/using_third_party_components_data',
        component: ComponentCreator('/docs/SCA/using_veracode_sca_upload_scan_results/using_third_party_components_data', '170'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_veracode_sca_upload_scan_results/using_vulnerabilities_data_sca',
        component: ComponentCreator('/docs/SCA/using_veracode_sca_upload_scan_results/using_vulnerabilities_data_sca', '0a7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/SCA/using_veracode_sca_upload_scan_results/veracode_sca_legal_disclaimer',
        component: ComponentCreator('/docs/SCA/using_veracode_sca_upload_scan_results/veracode_sca_legal_disclaimer', 'c65'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/',
        component: ComponentCreator('/docs/Security_Labs/', 'ba3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/assign_seclabs_roles/',
        component: ComponentCreator('/docs/Security_Labs/assign_seclabs_roles/', '702'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/assign_seclabs_roles/admin_manager/',
        component: ComponentCreator('/docs/Security_Labs/assign_seclabs_roles/admin_manager/', '55a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/assign_seclabs_roles/admin_manager/campaigns',
        component: ComponentCreator('/docs/Security_Labs/assign_seclabs_roles/admin_manager/campaigns', 'f24'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/assign_seclabs_roles/admin_manager/modules',
        component: ComponentCreator('/docs/Security_Labs/assign_seclabs_roles/admin_manager/modules', '892'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/assign_seclabs_roles/admin_manager/reporting',
        component: ComponentCreator('/docs/Security_Labs/assign_seclabs_roles/admin_manager/reporting', '7a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/assign_seclabs_roles/admin_manager/roles',
        component: ComponentCreator('/docs/Security_Labs/assign_seclabs_roles/admin_manager/roles', 'c78'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/assign_seclabs_roles/admin_manager/settings',
        component: ComponentCreator('/docs/Security_Labs/assign_seclabs_roles/admin_manager/settings', 'd91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/assign_seclabs_roles/admin_manager/users',
        component: ComponentCreator('/docs/Security_Labs/assign_seclabs_roles/admin_manager/users', 'e6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/assign_seclabs_roles/assign_roles',
        component: ComponentCreator('/docs/Security_Labs/assign_seclabs_roles/assign_roles', '889'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/assign_seclabs_roles/c_video_edit_assign_security_labs_roles',
        component: ComponentCreator('/docs/Security_Labs/assign_seclabs_roles/c_video_edit_assign_security_labs_roles', '880'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/assign_seclabs_roles/create_seclabs_roles',
        component: ComponentCreator('/docs/Security_Labs/assign_seclabs_roles/create_seclabs_roles', 'fa7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/c_about_sec_labs_community_edition',
        component: ComponentCreator('/docs/Security_Labs/c_about_sec_labs_community_edition', '56d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/create_camp_auto/',
        component: ComponentCreator('/docs/Security_Labs/create_camp_auto/', 'c0c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/create_camp_auto/c_video_create_campaign_assign_content_security_labs',
        component: ComponentCreator('/docs/Security_Labs/create_camp_auto/c_video_create_campaign_assign_content_security_labs', '54a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/create_camp_auto/t_create_camp',
        component: ComponentCreator('/docs/Security_Labs/create_camp_auto/t_create_camp', 'bba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/create_users/',
        component: ComponentCreator('/docs/Security_Labs/create_users/', '823'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/create_users/add_user_platform',
        component: ComponentCreator('/docs/Security_Labs/create_users/add_user_platform', '876'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/create_users/bulk_assign_individual_roles',
        component: ComponentCreator('/docs/Security_Labs/create_users/bulk_assign_individual_roles', '5d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/create_users/bulk_upload_assign_roles',
        component: ComponentCreator('/docs/Security_Labs/create_users/bulk_upload_assign_roles', '921'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/create_users/c_video_create_security_labs_users_from_veracode_platform',
        component: ComponentCreator('/docs/Security_Labs/create_users/c_video_create_security_labs_users_from_veracode_platform', '3ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/create_users/c_video_creating_sl_users_in_security_labs',
        component: ComponentCreator('/docs/Security_Labs/create_users/c_video_creating_sl_users_in_security_labs', 'e23'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/create_users/create_user_sml',
        component: ComponentCreator('/docs/Security_Labs/create_users/create_user_sml', '9e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/customize/',
        component: ComponentCreator('/docs/Security_Labs/customize/', 'bef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/customize/create_labs',
        component: ComponentCreator('/docs/Security_Labs/customize/create_labs', '2ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/customize/create_modules',
        component: ComponentCreator('/docs/Security_Labs/customize/create_modules', '618'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/customize/customize_conclusions',
        component: ComponentCreator('/docs/Security_Labs/customize/customize_conclusions', '1c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/customize/display_type',
        component: ComponentCreator('/docs/Security_Labs/customize/display_type', 'c26'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/customize/edit_lab_options',
        component: ComponentCreator('/docs/Security_Labs/customize/edit_lab_options', 'a23'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/customize/edit_labs',
        component: ComponentCreator('/docs/Security_Labs/customize/edit_labs', '31b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/customize/edit_modules',
        component: ComponentCreator('/docs/Security_Labs/customize/edit_modules', 'd7b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/customize/video_customize_lab_content_in_veracode_security_labs',
        component: ComponentCreator('/docs/Security_Labs/customize/video_customize_lab_content_in_veracode_security_labs', '94f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/getting_started/',
        component: ComponentCreator('/docs/Security_Labs/getting_started/', '5c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/getting_started/c_video_navigate_security_labs_interface',
        component: ComponentCreator('/docs/Security_Labs/getting_started/c_video_navigate_security_labs_interface', '1de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/getting_started/c_video_view_labs_in_veracode_security_labs',
        component: ComponentCreator('/docs/Security_Labs/getting_started/c_video_view_labs_in_veracode_security_labs', '4b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/getting_started/saml',
        component: ComponentCreator('/docs/Security_Labs/getting_started/saml', '55a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/t_assign_learning_paths',
        component: ComponentCreator('/docs/Security_Labs/t_assign_learning_paths', '9b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/t_email_progress_notifications',
        component: ComponentCreator('/docs/Security_Labs/t_email_progress_notifications', '76a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/t_omit_steps',
        component: ComponentCreator('/docs/Security_Labs/t_omit_steps', 'd5c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/using_teams_and_leaderboards_in_seclabs/',
        component: ComponentCreator('/docs/Security_Labs/using_teams_and_leaderboards_in_seclabs/', '83e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/using_teams_and_leaderboards_in_seclabs/c_video_due_dates_for_assignments_in_security_labs',
        component: ComponentCreator('/docs/Security_Labs/using_teams_and_leaderboards_in_seclabs/c_video_due_dates_for_assignments_in_security_labs', 'ee0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/using_teams_and_leaderboards_in_seclabs/contact_teammate',
        component: ComponentCreator('/docs/Security_Labs/using_teams_and_leaderboards_in_seclabs/contact_teammate', 'adc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/using_teams_and_leaderboards_in_seclabs/enable_certification_badge',
        component: ComponentCreator('/docs/Security_Labs/using_teams_and_leaderboards_in_seclabs/enable_certification_badge', '788'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/using_teams_and_leaderboards_in_seclabs/view_share_certification_badge',
        component: ComponentCreator('/docs/Security_Labs/using_teams_and_leaderboards_in_seclabs/view_share_certification_badge', '3c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/view_the_security_labs_reporting_page/',
        component: ComponentCreator('/docs/Security_Labs/view_the_security_labs_reporting_page/', '5f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Security_Labs/view_the_security_labs_reporting_page/c_video_report_on_user_progress_security_labs',
        component: ComponentCreator('/docs/Security_Labs/view_the_security_labs_reporting_page/c_video_report_on_user_progress_security_labs', 'eff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/',
        component: ComponentCreator('/docs/Static/', 'be1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/data_retention',
        component: ComponentCreator('/docs/Static/data_retention', 'd03'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/errors_master',
        component: ComponentCreator('/docs/Static/errors_master', '667'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/export_prescan_results',
        component: ComponentCreator('/docs/Static/export_prescan_results', 'd09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/getting_started_static/',
        component: ComponentCreator('/docs/Static/getting_started_static/', '8ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/getting_started_static/edit_application_profile',
        component: ComponentCreator('/docs/Static/getting_started_static/edit_application_profile', 'a24'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/getting_started_static/request_profile',
        component: ComponentCreator('/docs/Static/getting_started_static/request_profile', '1f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/getting_started_static/static_nextsteps',
        component: ComponentCreator('/docs/Static/getting_started_static/static_nextsteps', '1b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/getting_started_static/workflow_scan',
        component: ComponentCreator('/docs/Static/getting_started_static/workflow_scan', '83c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/request_master',
        component: ComponentCreator('/docs/Static/request_master', '6c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/request_static_scan_options',
        component: ComponentCreator('/docs/Static/request_static_scan_options', '66c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/request_status/',
        component: ComponentCreator('/docs/Static/request_status/', 'b6f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/request_status/delete_completed_scan',
        component: ComponentCreator('/docs/Static/request_status/delete_completed_scan', '885'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/request_status/delete_scan_request',
        component: ComponentCreator('/docs/Static/request_status/delete_scan_request', 'b23'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/request_status/download_scan_activity',
        component: ComponentCreator('/docs/Static/request_status/download_scan_activity', '813'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/request_status/progress_scans_page',
        component: ComponentCreator('/docs/Static/request_status/progress_scans_page', '4eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/request_status/status_applications_page',
        component: ComponentCreator('/docs/Static/request_status/status_applications_page', 'b22'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/request_status/status_on_the_application_overview',
        component: ComponentCreator('/docs/Static/request_status/status_on_the_application_overview', '694'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/request_status/understanding_status_values',
        component: ComponentCreator('/docs/Static/request_status/understanding_status_values', '259'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/request_status/viewing_detailed_scan_activity',
        component: ComponentCreator('/docs/Static/request_status/viewing_detailed_scan_activity', 'e2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/request_time',
        component: ComponentCreator('/docs/Static/request_time', '67f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/rescan',
        component: ComponentCreator('/docs/Static/rescan', '816'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/reupload_modules',
        component: ComponentCreator('/docs/Static/reupload_modules', '0ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/select_modules_to_scan',
        component: ComponentCreator('/docs/Static/select_modules_to_scan', '1ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/start_scan',
        component: ComponentCreator('/docs/Static/start_scan', 'f37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/static_details',
        component: ComponentCreator('/docs/Static/static_details', '7be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/submit_application_prescan',
        component: ComponentCreator('/docs/Static/submit_application_prescan', '7e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/toplevel_modules',
        component: ComponentCreator('/docs/Static/toplevel_modules', '568'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/upload_packaged',
        component: ComponentCreator('/docs/Static/upload_packaged', '4fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/video_request_a_static_scan',
        component: ComponentCreator('/docs/Static/video_request_a_static_scan', '683'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Static/view_changes_file_uploads',
        component: ComponentCreator('/docs/Static/view_changes_file_uploads', 'd9d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/',
        component: ComponentCreator('/docs/third_party_libraries/', '02d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/azure_devops_libs',
        component: ComponentCreator('/docs/third_party_libraries/azure_devops_libs', 'c02'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/eclipse_static_libs',
        component: ComponentCreator('/docs/third_party_libraries/eclipse_static_libs', 'd34'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/gl_eclipse_libs',
        component: ComponentCreator('/docs/third_party_libraries/gl_eclipse_libs', '569'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/gl_intellij_libs',
        component: ComponentCreator('/docs/third_party_libraries/gl_intellij_libs', '752'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/gl_vs_code_libs',
        component: ComponentCreator('/docs/third_party_libraries/gl_vs_code_libs', '9f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/gl_vs_libs',
        component: ComponentCreator('/docs/third_party_libraries/gl_vs_libs', '081'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/gl_vs2019_libs',
        component: ComponentCreator('/docs/third_party_libraries/gl_vs2019_libs', 'ab4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/ism_endpoint_libs',
        component: ComponentCreator('/docs/third_party_libraries/ism_endpoint_libs', '3dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/ism_gateway_libs',
        component: ComponentCreator('/docs/third_party_libraries/ism_gateway_libs', '005'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/java_wrapper_libs',
        component: ComponentCreator('/docs/third_party_libraries/java_wrapper_libs', '33d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/jenkins_libs',
        component: ComponentCreator('/docs/third_party_libraries/jenkins_libs', 'c87'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/jira_cloud_libs',
        component: ComponentCreator('/docs/third_party_libraries/jira_cloud_libs', '553'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/jira_server_libs',
        component: ComponentCreator('/docs/third_party_libraries/jira_server_libs', '8af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/mobile_app_pkger_libs',
        component: ComponentCreator('/docs/third_party_libraries/mobile_app_pkger_libs', '00a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/sca_srcclr_agent_libs',
        component: ComponentCreator('/docs/third_party_libraries/sca_srcclr_agent_libs', '9e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/static_analysis_libs',
        component: ComponentCreator('/docs/third_party_libraries/static_analysis_libs', '630'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/teamcity_libs',
        component: ComponentCreator('/docs/third_party_libraries/teamcity_libs', 'eff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/third_party_libraries/vs_static_libs',
        component: ComponentCreator('/docs/third_party_libraries/vs_static_libs', 'dad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/thirdparty/',
        component: ComponentCreator('/docs/thirdparty/', '78c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/thirdparty/enterprise/',
        component: ComponentCreator('/docs/thirdparty/enterprise/', '35d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/thirdparty/enterprise/c_COTS_actions',
        component: ComponentCreator('/docs/thirdparty/enterprise/c_COTS_actions', '464'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/thirdparty/enterprise/request_cots_accept',
        component: ComponentCreator('/docs/thirdparty/enterprise/request_cots_accept', '710'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/thirdparty/enterprise/request_profile_cots',
        component: ComponentCreator('/docs/thirdparty/enterprise/request_profile_cots', 'f63'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/thirdparty/vast/',
        component: ComponentCreator('/docs/thirdparty/vast/', '0cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/thirdparty/vast/c_shared_sca',
        component: ComponentCreator('/docs/thirdparty/vast/c_shared_sca', '387'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/thirdparty/vast/c_shared_VAST',
        component: ComponentCreator('/docs/thirdparty/vast/c_shared_VAST', 'db6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/thirdparty/vast/c_VAST_profile',
        component: ComponentCreator('/docs/thirdparty/vast/c_VAST_profile', 'f35'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/thirdparty/vast/c_VAST_vendor',
        component: ComponentCreator('/docs/thirdparty/vast/c_VAST_vendor', 'bf3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/',
        component: ComponentCreator('/docs/ticketing/', '55d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/about_ticketing_systems',
        component: ComponentCreator('/docs/ticketing/about_ticketing_systems', '47b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/azure_devops_extension/',
        component: ComponentCreator('/docs/ticketing/azure_devops_extension/', 'c68'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/azure_devops_extension/azure_add_flaw_importer_yaml',
        component: ComponentCreator('/docs/ticketing/azure_devops_extension/azure_add_flaw_importer_yaml', '2da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/azure_devops_extension/azure_flaw_import_yaml_props',
        component: ComponentCreator('/docs/ticketing/azure_devops_extension/azure_flaw_import_yaml_props', '09f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/azure_devops_extension/azure_import_flaws',
        component: ComponentCreator('/docs/ticketing/azure_devops_extension/azure_import_flaws', 'ab3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/azure_devops_extension/use_custom_flaw_templates_azure',
        component: ComponentCreator('/docs/ticketing/azure_devops_extension/use_custom_flaw_templates_azure', 'eb2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/bugzilla_integration/',
        component: ComponentCreator('/docs/ticketing/bugzilla_integration/', 'ede'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/bugzilla_integration/configure_bugzilla',
        component: ComponentCreator('/docs/ticketing/bugzilla_integration/configure_bugzilla', 'a37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/bugzilla_integration/integrate_bugzilla',
        component: ComponentCreator('/docs/ticketing/bugzilla_integration/integrate_bugzilla', '168'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/bugzilla_integration/map_bugzilla_fields',
        component: ComponentCreator('/docs/ticketing/bugzilla_integration/map_bugzilla_fields', '9d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/bugzilla_integration/test_bugzilla_integration',
        component: ComponentCreator('/docs/ticketing/bugzilla_integration/test_bugzilla_integration', 'f55'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/', 'f20'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/configure_jira_cloud_integration/',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/configure_jira_cloud_integration/', 'b79'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/configure_jira_cloud_integration/jira_cloud_add_login_creds',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/configure_jira_cloud_integration/jira_cloud_add_login_creds', '20c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/configure_jira_cloud_integration/jira_cloud_configure_findings_import',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/configure_jira_cloud_integration/jira_cloud_configure_findings_import', 'ac3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/install_jira_cloud_integration/',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/install_jira_cloud_integration/', 'df3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/install_jira_cloud_integration/jira_cloud_uninstall',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/install_jira_cloud_integration/jira_cloud_uninstall', 'b1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/jira_cloud_associate_fields_to_screens',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/jira_cloud_associate_fields_to_screens', 'a1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/jira_cloud_clear_cache',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/jira_cloud_clear_cache', '5e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/jira_cloud_importing_findings/',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/jira_cloud_importing_findings/', 'fde'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/jira_cloud_importing_findings/jira_cloud_auto_findings_import',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/jira_cloud_importing_findings/jira_cloud_auto_findings_import', '1d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/jira_cloud_importing_findings/jira_cloud_onetime_findings_import',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/jira_cloud_importing_findings/jira_cloud_onetime_findings_import', 'e32'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/jira_cloud_importing_findings/jira_cloud_selective_findings_import',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/jira_cloud_importing_findings/jira_cloud_selective_findings_import', '212'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/jira_cloud_mapping_sevs_to_priorities/',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/jira_cloud_mapping_sevs_to_priorities/', '7ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/jira_cloud_mapping_sevs_to_priorities/jira_cloud_config_sev_mapping',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/jira_cloud_mapping_sevs_to_priorities/jira_cloud_config_sev_mapping', 'cde'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/jira_cloud_mapping_sevs_to_priorities/jira_cloud_sev_mapping_example',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/jira_cloud_mapping_sevs_to_priorities/jira_cloud_sev_mapping_example', 'c27'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/jira_finding_life_cycle',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/jira_finding_life_cycle', '392'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/jira_mapping_fields/',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/jira_mapping_fields/', '42c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/jira_mapping_fields/configure_mappings_for_jira_cloud_fields',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/jira_mapping_fields/configure_mappings_for_jira_cloud_fields', '148'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/jira_mapping_fields/jira_fields_map_veracode_fields',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/jira_mapping_fields/jira_fields_map_veracode_fields', 'b52'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/jira_mapping_fields/jira_mapping_fields',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/jira_mapping_fields/jira_mapping_fields', 'f32'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/jira_mapping_fields/jira_using_default_veracode_fields',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/jira_mapping_fields/jira_using_default_veracode_fields', '66e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_cloud_integration/jira_mapping_fields/mapping_jira_data_types_fields_types',
        component: ComponentCreator('/docs/ticketing/jira_cloud_integration/jira_mapping_fields/mapping_jira_data_types_fields_types', 'eae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/',
        component: ComponentCreator('/docs/ticketing/jira_integration/', '74c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/configure_jira_integration/',
        component: ComponentCreator('/docs/ticketing/jira_integration/configure_jira_integration/', 'd53'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/configure_jira_integration/add_credentials_jira',
        component: ComponentCreator('/docs/ticketing/jira_integration/configure_jira_integration/add_credentials_jira', 'dda'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/configure_jira_integration/configure_jira_findings_import',
        component: ComponentCreator('/docs/ticketing/jira_integration/configure_jira_integration/configure_jira_findings_import', '866'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/install_jira_integration/',
        component: ComponentCreator('/docs/ticketing/jira_integration/install_jira_integration/', '999'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/install_jira_integration/jira_remove_duplicate_issues',
        component: ComponentCreator('/docs/ticketing/jira_integration/install_jira_integration/jira_remove_duplicate_issues', '2e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/install_jira_integration/jira_uninstall',
        component: ComponentCreator('/docs/ticketing/jira_integration/install_jira_integration/jira_uninstall', '676'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/install_jira_integration/jira_update',
        component: ComponentCreator('/docs/ticketing/jira_integration/install_jira_integration/jira_update', '840'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/install_jira_integration/jira_upgrade_old_version',
        component: ComponentCreator('/docs/ticketing/jira_integration/install_jira_integration/jira_upgrade_old_version', 'd2f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/jira_associate_fields_to_screens/',
        component: ComponentCreator('/docs/ticketing/jira_integration/jira_associate_fields_to_screens/', '30b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/jira_associate_fields_to_screens/jira_mitigate_readonly',
        component: ComponentCreator('/docs/ticketing/jira_integration/jira_associate_fields_to_screens/jira_mitigate_readonly', 'd82'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/jira_enable_logging',
        component: ComponentCreator('/docs/ticketing/jira_integration/jira_enable_logging', '8b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/jira_finding_life_cycle',
        component: ComponentCreator('/docs/ticketing/jira_integration/jira_finding_life_cycle', 'e0a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/jira_import_findings/',
        component: ComponentCreator('/docs/ticketing/jira_integration/jira_import_findings/', '051'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/jira_import_findings/jira_onetime_findings_import',
        component: ComponentCreator('/docs/ticketing/jira_integration/jira_import_findings/jira_onetime_findings_import', '2bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/jira_import_findings/jira_schedule_auto_findings_import',
        component: ComponentCreator('/docs/ticketing/jira_integration/jira_import_findings/jira_schedule_auto_findings_import', 'ac2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/jira_import_findings/jira_selective_findings_import',
        component: ComponentCreator('/docs/ticketing/jira_integration/jira_import_findings/jira_selective_findings_import', '201'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/jira_mapping_fields/',
        component: ComponentCreator('/docs/ticketing/jira_integration/jira_mapping_fields/', 'a0b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/jira_mapping_fields/configure_mappings_for_jira_fields',
        component: ComponentCreator('/docs/ticketing/jira_integration/jira_mapping_fields/configure_mappings_for_jira_fields', '908'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/jira_mapping_fields/jira_fields_map_veracode_fields',
        component: ComponentCreator('/docs/ticketing/jira_integration/jira_mapping_fields/jira_fields_map_veracode_fields', 'e4d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/jira_mapping_fields/jira_mapping_fields',
        component: ComponentCreator('/docs/ticketing/jira_integration/jira_mapping_fields/jira_mapping_fields', '199'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/jira_mapping_fields/jira_using_default_veracode_fields',
        component: ComponentCreator('/docs/ticketing/jira_integration/jira_mapping_fields/jira_using_default_veracode_fields', '860'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/jira_mapping_fields/mapping_jira_data_types_fields_types',
        component: ComponentCreator('/docs/ticketing/jira_integration/jira_mapping_fields/mapping_jira_data_types_fields_types', '451'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/jira_mapping_sevs_to_priorities/',
        component: ComponentCreator('/docs/ticketing/jira_integration/jira_mapping_sevs_to_priorities/', '14c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/jira_mapping_sevs_to_priorities/jira_map_priorities_veracode_severities',
        component: ComponentCreator('/docs/ticketing/jira_integration/jira_mapping_sevs_to_priorities/jira_map_priorities_veracode_severities', 'f30'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ticketing/jira_integration/jira_mapping_sevs_to_priorities/jira_severity_mapping_exxample',
        component: ComponentCreator('/docs/ticketing/jira_integration/jira_mapping_sevs_to_priorities/jira_severity_mapping_exxample', '3ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_all_docs_videos/',
        component: ComponentCreator('/docs/tile_all_docs_videos/', '6f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_all_docs_videos/all_docs_tile',
        component: ComponentCreator('/docs/tile_all_docs_videos/all_docs_tile', '9d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_all_docs_videos/all_videos_tile',
        component: ComponentCreator('/docs/tile_all_docs_videos/all_videos_tile', '20c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_app_analysis/',
        component: ComponentCreator('/docs/tile_app_analysis/', 'b80'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/',
        component: ComponentCreator('/docs/tile_getting_started/', '652'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/geting_started_veracode/',
        component: ComponentCreator('/docs/tile_getting_started/geting_started_veracode/', 'c39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/geting_started_veracode/access_veracode/',
        component: ComponentCreator('/docs/tile_getting_started/geting_started_veracode/access_veracode/', 'b82'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/geting_started_veracode/access_veracode/activate_veracode_account',
        component: ComponentCreator('/docs/tile_getting_started/geting_started_veracode/access_veracode/activate_veracode_account', '611'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/geting_started_veracode/access_veracode/log_in_platform/',
        component: ComponentCreator('/docs/tile_getting_started/geting_started_veracode/access_veracode/log_in_platform/', 'e75'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/geting_started_veracode/access_veracode/log_in_platform/allow_domains_ip_addresses',
        component: ComponentCreator('/docs/tile_getting_started/geting_started_veracode/access_veracode/log_in_platform/allow_domains_ip_addresses', 'bf2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/geting_started_veracode/access_veracode/log_in_platform/configure_mfa',
        component: ComponentCreator('/docs/tile_getting_started/geting_started_veracode/access_veracode/log_in_platform/configure_mfa', 'a2c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/geting_started_veracode/access_veracode/log_in_platform/region_domains_services',
        component: ComponentCreator('/docs/tile_getting_started/geting_started_veracode/access_veracode/log_in_platform/region_domains_services', 'bb8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/geting_started_veracode/access_veracode/log_in_platform/reset_mfa',
        component: ComponentCreator('/docs/tile_getting_started/geting_started_veracode/access_veracode/log_in_platform/reset_mfa', '527'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/geting_started_veracode/getting_started_appsec/',
        component: ComponentCreator('/docs/tile_getting_started/geting_started_veracode/getting_started_appsec/', 'ad6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/geting_started_veracode/getting_started_appsec/choosing_scan_type',
        component: ComponentCreator('/docs/tile_getting_started/geting_started_veracode/getting_started_appsec/choosing_scan_type', '70a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/geting_started_veracode/getting_started_appsec/dynamic_analysis_overview',
        component: ComponentCreator('/docs/tile_getting_started/geting_started_veracode/getting_started_appsec/dynamic_analysis_overview', '74d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/geting_started_veracode/getting_started_appsec/getstarted_app_risk_management',
        component: ComponentCreator('/docs/tile_getting_started/geting_started_veracode/getting_started_appsec/getstarted_app_risk_management', '574'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/geting_started_veracode/getting_started_appsec/managing_app_portfolio',
        component: ComponentCreator('/docs/tile_getting_started/geting_started_veracode/getting_started_appsec/managing_app_portfolio', 'd31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/geting_started_veracode/getting_started_appsec/navigate_app_menu_platform',
        component: ComponentCreator('/docs/tile_getting_started/geting_started_veracode/getting_started_appsec/navigate_app_menu_platform', '2c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/geting_started_veracode/getting_started_appsec/static_scan_overview',
        component: ComponentCreator('/docs/tile_getting_started/geting_started_veracode/getting_started_appsec/static_scan_overview', 'bf5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/geting_started_veracode/selecting_products',
        component: ComponentCreator('/docs/tile_getting_started/geting_started_veracode/selecting_products', 'f99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/glossary',
        component: ComponentCreator('/docs/tile_getting_started/glossary', '008'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/', '512'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/about_community',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/about_community', '173'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/about_user_entity_controls',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/about_user_entity_controls', '8d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/access_community_platform',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/access_community_platform', '0cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/account_auth_notifications_platform',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/account_auth_notifications_platform', '5eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/bookmarking_reports_platform',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/bookmarking_reports_platform', '9bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/browse_apps_platform',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/browse_apps_platform', 'ff1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/browser_reqs_platform',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/browser_reqs_platform', '29d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/change_security_question_platform',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/change_security_question_platform', '0c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/contact_support_platform',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/contact_support_platform', '153'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/create_custom_metadata_fields_platform',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/create_custom_metadata_fields_platform', '9e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/export_data_platform',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/export_data_platform', '106'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/manage_app_metadata_platform',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/manage_app_metadata_platform', '33d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/platform_left_nav_menu/',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/platform_left_nav_menu/', '8a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/platform_left_nav_menu/completed_scans',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/platform_left_nav_menu/completed_scans', '45b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/platform_left_nav_menu/in_progress_scans',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/platform_left_nav_menu/in_progress_scans', '416'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/reset_password_platform/',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/reset_password_platform/', '09f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/reset_password_platform/reset_expiring_password',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/reset_password_platform/reset_expiring_password', '551'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/reset_password_platform/reset_forgotten_password',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/reset_password_platform/reset_forgotten_password', '65e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/reset_password_platform/reset_password_account_locked',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/reset_password_platform/reset_password_account_locked', 'eb5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/reset_password_platform/reset_password_admin_request',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/reset_password_platform/reset_password_admin_request', 'c97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/subscribe_news_platform',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/subscribe_news_platform', '652'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/using_file_exchange_platform',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/using_file_exchange_platform', '346'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/using_passwords_platform',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/using_passwords_platform', 'cac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/platform_basics/verify_email_address_platform',
        component: ComponentCreator('/docs/tile_getting_started/platform_basics/verify_email_address_platform', 'e62'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_getting_started/use_docs',
        component: ComponentCreator('/docs/tile_getting_started/use_docs', '8e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_integrations/',
        component: ComponentCreator('/docs/tile_integrations/', 'aa8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_integrations/about_integrations',
        component: ComponentCreator('/docs/tile_integrations/about_integrations', 'dfd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_integrations/api_creds_file/',
        component: ComponentCreator('/docs/tile_integrations/api_creds_file/', '020'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_integrations/api_creds_file/configure_creds_file_mac_linux',
        component: ComponentCreator('/docs/tile_integrations/api_creds_file/configure_creds_file_mac_linux', '279'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_integrations/api_creds_file/configure_creds_file_variable_mac_linux',
        component: ComponentCreator('/docs/tile_integrations/api_creds_file/configure_creds_file_variable_mac_linux', '7d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_integrations/api_creds_file/configure_creds_file_windows',
        component: ComponentCreator('/docs/tile_integrations/api_creds_file/configure_creds_file_windows', '9a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_integrations/api_creds_file/video_configure_creds_file_mac_linux',
        component: ComponentCreator('/docs/tile_integrations/api_creds_file/video_configure_creds_file_mac_linux', '78e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_integrations/api_creds_file/video_configure_creds_file_windows',
        component: ComponentCreator('/docs/tile_integrations/api_creds_file/video_configure_creds_file_windows', 'f58'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_integrations/api_creds/',
        component: ComponentCreator('/docs/tile_integrations/api_creds/', 'da7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_integrations/api_creds/generate_api_creds',
        component: ComponentCreator('/docs/tile_integrations/api_creds/generate_api_creds', '714'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_integrations/api_creds/revoke_api_creds',
        component: ComponentCreator('/docs/tile_integrations/api_creds/revoke_api_creds', '298'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_integrations/automate_analysis_integrations',
        component: ComponentCreator('/docs/tile_integrations/automate_analysis_integrations', '3c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_integrations/docker_images',
        component: ComponentCreator('/docs/tile_integrations/docker_images', '907'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_training/',
        component: ComponentCreator('/docs/tile_training/', '9d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tile_troubleshoot/',
        component: ComponentCreator('/docs/tile_troubleshoot/', '683'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '222'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
