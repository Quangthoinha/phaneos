# Security Policy

**Effective date:** 1 January 2026  
**Last reviewed:** 27 June 2026  
**Applies to:** all phaneosAI employees, contractors, partners, and subprocessors who access phaneosAI systems, client data, or personal data.

---

## 1. Purpose

This policy defines the security principles, controls, and responsibilities that protect phaneosAI services, client data, and personal data. It is designed to support our obligations under GDPR Article 32, Vietnam's Law on Personal Data Protection 91/2025/QH15 and Decree 356/2025/ND-CP, and other applicable frameworks.

---

## 2. Scope

This policy covers:

- phaneosai.com and associated web properties;
- Cloud infrastructure, code repositories, and internal tools;
- Email, messaging, and document systems used for client work;
- Third-party services that process phaneosAI or client data;
- Personnel devices and credentials used to access phaneosAI systems.

---

## 3. Roles and responsibilities

| Role | Responsibility |
|---|---|
| Executive leadership | Approve policy, allocate resources, oversee incident response |
| Engineering / Security | Implement controls, monitor threats, respond to incidents |
| All personnel | Follow access controls, report suspicious activity, complete security awareness training |
| Partners / subprocessors | Meet contractual security requirements and report breaches |

We do not currently maintain a dedicated CISO; security responsibilities are assigned to engineering leadership.

---

## 4. Access control

- **Least privilege:** access is granted only to the systems and data needed for a user's role.
- **Authentication:** multi-factor authentication (MFA) is required for all production and business-critical systems.
- **Authorization:** role-based permissions are reviewed quarterly or upon role change.
- **Offboarding:** access is revoked promptly when an employee or contractor leaves.
- **Shared accounts:** shared or generic accounts are prohibited unless technically necessary and monitored.

---

## 5. Data protection

### 5.1 Encryption
- Data in transit is protected with TLS 1.2 or higher, preferably TLS 1.3.
- Sensitive data at rest is encrypted using provider-managed encryption keys, with customer-managed keys where supported for critical systems.

### 5.2 Data handling
- Client data is processed only for the purposes described in the relevant agreement or [Data Processing Addendum](./data-processing-addendum.md).
- Personal data is minimized, pseudonymized where practical, and deleted when no longer needed.
- Production data is not copied to local devices or unapproved environments without authorization.

### 5.3 Backups
- Critical business and client data is backed up regularly.
- Backup restoration is tested at least annually.

---

## 6. Secure development and operations

- Code changes require review before merging to production.
- Dependency updates and vulnerability scanning are performed on a risk-based schedule.
- Production deployments are automated and auditable.
- Secrets (API keys, passwords, tokens) are stored in secure secret-management systems, never in source code.
- Public repositories and documentation are reviewed to prevent accidental disclosure of sensitive information.

---

## 7. Vendor and subprocessor management

- Subprocessors are assessed for security and privacy posture before onboarding.
- Subprocessor agreements include security, confidentiality, and breach-notification obligations.
- A current list of material subprocessors is maintained in our [Data Processing Addendum](./data-processing-addendum.md).

---

## 8. Incident response

### 8.1 Detection and reporting
- Security events are monitored through logging and alerting.
- All personnel must report suspected incidents to [security@phaneos.cloud](mailto:security@phaneos.cloud) promptly.

### 8.2 Response steps
1. **Containment:** limit the scope and impact of the incident.
2. **Investigation:** determine cause, affected systems, and data involved.
3. **Remediation:** fix the root cause and restore normal operations.
4. **Notification:** notify affected clients and regulators within 72 hours where required by law.
5. **Review:** document lessons learned and update controls.

### 8.3 Breach notification
- Personal data breaches are notified to supervisory authorities within 72 hours where feasible.
- Affected data controllers and data subjects are notified without undue delay when required by law.

---

## 9. Business continuity

- Critical systems and data are recoverable in the event of failure or disaster.
- A business-continuity and disaster-recovery plan is maintained and reviewed at least annually.

---

## 10. Compliance and audits

- We perform periodic self-assessments of security controls.
- Clients may request summary security information or, where contractually agreed, participate in audits subject to confidentiality.
- We align with ISO/IEC 27001 principles and SOC 2 expectations, even if formal certification is not yet in place.

---

## 11. User and partner responsibilities

Users and partners must:

- keep their account credentials secure and use MFA where available;
- report suspected unauthorized access;
- not attempt to test our security without prior written authorization;
- comply with the [Acceptable Use Policy](./acceptable-use-policy.md).

---

## 12. Changes

We review this Security Policy at least annually and after any significant security incident or service change.

---

*This Security Policy is provided for transparency and risk-management purposes. It does not constitute legal advice or a guarantee against all security incidents.*
