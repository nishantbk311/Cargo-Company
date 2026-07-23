import React from 'react';
import { ShieldCheck, Lock, FileText } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="w-full text-white bg-[#061e3d] min-h-screen py-16 sm:py-20 px-6 sm:px-12 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-8 bg-[#082247] p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl">
        <div className="flex items-center gap-3 pb-6 border-b border-white/10">
          <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Privacy Policy & Governance</h1>
            <p className="text-xs text-slate-300">Effective Date: July 1, 2026 • NexCargo Logistics Inc.</p>
          </div>
        </div>

        <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" /> 1. Cargo Telematics Data Protection
            </h2>
            <p>
              NexCargo collects real-time location, weight, temperature, and biometric authentication telemetry exclusively to ensure cargo safety, customs compliance, and contract SLA fulfilment. All telemetry streams are encrypted in transit via TLS 1.3 and at rest with AES-256 standards.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" /> 2. Customs & Border Agency Data Sharing
            </h2>
            <p>
              In accordance with international trade security protocols (C-TPAT, AEO, EU ICS2), commercial invoices, harmonized tariff codes, and shipper/consignee identities are shared with relevant government customs authorities solely for legal clearance purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> 3. Data Retention & Privacy Rights
            </h2>
            <p>
              Corporate records and shipment logs are retained for a minimum of 7 years in accordance with international maritime and aviation auditing regulations. Shippers retain the right to request exported audit logs of all personal data held.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
