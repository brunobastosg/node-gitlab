import { ApplicationSettings } from '../../../src';

describe('ApplicationSettings.all', () => {
  it('should return an array', async () => {
    const service = new ApplicationSettings({
      url: process.env.GITLAB_URL,
      token: process.env.PERSONAL_ACCESS_TOKEN,
    });
    const settings = await service.all();

    expect(settings).toBeObject();
  });

  it('should contain all the required properties', async () => {
    const service = new ApplicationSettings({
      url: process.env.GITLAB_URL,
      token: process.env.PERSONAL_ACCESS_TOKEN,
    });
    const settings = await service.all();

    expect(settings).toContainAllKeys([
      'id',
      'performance_bar_allowed_group_id',
      'admin_notification_email',
      'after_sign_out_path',
      'after_sign_up_text',
      'akismet_api_key',
      'akismet_enabled',
      'allow_local_requests_from_hooks_and_services',
      'authorized_keys_enabled',
      'auto_devops_enabled',
      'auto_devops_domain',
      'circuitbreaker_access_retries',
      'circuitbreaker_check_interval',
      'circuitbreaker_failure_count_threshold',
      'circuitbreaker_failure_reset_time',
      'circuitbreaker_storage_timeout',
      'clientside_sentry_dsn',
      'clientside_sentry_enabled',
      'container_registry_token_expire_delay',
      'default_artifacts_expire_in',
      'default_branch_protection',
      'default_group_visibility',
      'default_project_visibility',
      'default_projects_limit',
      'default_snippet_visibility',
      'disabled_oauth_sign_in_sources',
      'domain_blacklist_enabled',
      'domain_blacklist_raw',
      'domain_whitelist_raw',
      'dsa_key_restriction',
      'ecdsa_key_restriction',
      'ed25519_key_restriction',
      'email_author_in_body',
      'enabled_git_access_protocol',
      'enforce_terms',
      'gitaly_timeout_default',
      'gitaly_timeout_medium',
      'gitaly_timeout_fast',
      'gravatar_enabled',
      'hashed_storage_enabled',
      'help_page_hide_commercial_content',
      'help_page_support_url',
      'help_page_text',
      'hide_third_party_offers',
      'home_page_url',
      'housekeeping_bitmaps_enabled',
      'housekeeping_enabled',
      'housekeeping_full_repack_period',
      'housekeeping_gc_period',
      'housekeeping_incremental_repack_period',
      'html_emails_enabled',
      'import_sources',
      'koding_enabled',
      'koding_url',
      'max_artifacts_size',
      'max_attachment_size',
      'max_pages_size',
      'metrics_enabled',
      'metrics_host',
      'metrics_method_call_threshold',
      'metrics_packet_size',
      'metrics_pool_size',
      'metrics_port',
      'metrics_sample_interval',
      'metrics_timeout',
      'mirror_available',
      'pages_domain_verification_enabled',
      'password_authentication_enabled_for_web',
      'password_authentication_enabled_for_git',
      'plantuml_enabled',
      'plantuml_url',
      'polling_interval_multiplier',
      'project_export_enabled',
      'prometheus_metrics_enabled',
      'recaptcha_enabled',
      'recaptcha_private_key',
      'recaptcha_site_key',
      'repository_checks_enabled',
      'repository_storages',
      'require_two_factor_authentication',
      'restricted_visibility_levels',
      'rsa_key_restriction',
      'send_user_confirmation_email',
      'sentry_dsn',
      'sentry_enabled',
      'session_expire_delay',
      'shared_runners_enabled',
      'shared_runners_text',
      'sidekiq_throttling_enabled',
      'sidekiq_throttling_factor',
      'sidekiq_throttling_queues',
      'sign_in_text',
      'signup_enabled',
      'terminal_max_session_time',
      'terms',
      'throttle_authenticated_api_enabled',
      'throttle_authenticated_api_period_in_seconds',
      'throttle_authenticated_api_requests_per_period',
      'throttle_authenticated_web_enabled',
      'throttle_authenticated_web_period_in_seconds',
      'throttle_authenticated_web_requests_per_period',
      'throttle_unauthenticated_enabled',
      'throttle_unauthenticated_period_in_seconds',
      'throttle_unauthenticated_requests_per_period',
      'two_factor_grace_period',
      'unique_ips_limit_enabled',
      'unique_ips_limit_per_user',
      'unique_ips_limit_time_window',
      'usage_ping_enabled',
      'instance_statistics_visibility_private',
      'user_default_external',
      'user_oauth_applications',
      'version_check_enabled',
      'web_ide_clientside_preview_enabled',
      'password_authentication_enabled',
      'signin_enabled',
    ]);
  });
});
