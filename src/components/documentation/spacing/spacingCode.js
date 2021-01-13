export const spacingCode = `
/* --- SECTION WITH TEXT IN BOTH COLUMNS --- */
  /* --- Note: use of spacing guidelines as padding --- */
  .two-column {
    color: var(--heading-color);
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 16px;
  }
  .two-column .title {
    box-sizing: border-box;
    padding: 16px 0 0 0;
    width: 100%;
  }
  .two-column .content {
    display: flex;
    width: 100%;
    box-sizing: border-box;
  }
  .two-column .title h2 {
    color: var(--primary-accent);
    padding: 4px 0;
    box-sizing: border-box;
    text-align: left;
  }
  .two-column .content .left {
    padding: 16px 16px 16px 0;
    box-sizing: border-box;
    width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .two-column .content .right {
    padding: 16px;
    box-sizing: border-box;
    width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`.trim();