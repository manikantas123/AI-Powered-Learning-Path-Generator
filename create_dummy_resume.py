from fpdf import FPDF

pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial", size=12)
pdf.cell(200, 10, txt="Amith Viswas Reddy - Software Developer", ln=1, align="C")
pdf.cell(200, 10, txt="Experience: 1 year building Python Flask APIs", ln=1)
pdf.cell(200, 10, txt="Skills: Python, HTML, CSS, JavaScript, React.js", ln=1)
pdf.cell(200, 10, txt="Education: LPU B.Tech CSE", ln=1)
pdf.output("dummy_resume.pdf")
