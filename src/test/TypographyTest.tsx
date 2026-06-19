export function TypographyTest() {
  return (
    <>
      <div>
        <div className="bg-surface-container-lowest p-8">
          <div className="bg-surface-container rounded-xl p-6">
            <p className="text-on-surface">
              This is a card (surface-container)
            </p>
            <div className="bg-surface-container-high rounded-lg p-4 mt-3">
              <p className="text-on-surface-variant">
                Nested element (one level higher)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-8 space-y-4">
        {/* Strong primary — solid CTA button */}
        <button className="bg-primary text-on-primary rounded-lg px-4 py-2">
          Send Campaign
        </button>

        <div className="bg-primary-container text-on-primary-container rounded-lg px-4 py-3">
          Campaign sent successfully
        </div>

        {/* Container primary — soft badge */}
        <span className="bg-primary-container text-on-primary-container rounded-full px-3 py-1 text-sm">
          Active
        </span>

        {/* Secondary — supporting button */}
        <button className="bg-secondary text-on-secondary rounded-lg px-4 py-2">
          Save Draft
        </button>

        {/* Tertiary container — 2FA badge */}
        <span className="bg-tertiary-container text-on-tertiary-container rounded-full px-3 py-1 text-sm">
          2FA Enabled
        </span>
      </div>

      <div className="bg-surface-container-lowest p-8 space-y-4">
        {/* Strong error — destructive button */}
        <button className="bg-error text-on-error rounded-lg px-4 py-2">
          Delete Campaign
        </button>

        {/* Error container — validation message under a form field */}
        <p className="bg-error-container text-on-error-container rounded-md px-3 py-2 text-sm">
          Recipient email is invalid
        </p>
      </div>

      <div className="bg-background p-8 space-y-4">
        {/* Inverse — simulating a toast */}
        <div className="bg-inverse-surface text-inverse-on-surface rounded-lg px-4 py-3 flex justify-between items-center">
          <span>Campaign sent successfully</span>
          <button className="text-inverse-primary font-medium">Undo</button>
        </div>

        {/* Outline — bordered secondary button + a divider */}
        <button className="border border-outline rounded-lg px-4 py-2 text-on-surface">
          Cancel
        </button>
        <hr className="border-outline-variant" />

        {/* Fixed — a tag/chip that never changes even in dark mode */}
        <span className="bg-primary-fixed text-on-primary-fixed rounded-full px-3 py-1 text-sm">
          Promo
        </span>
      </div>
    </>
  );
}
