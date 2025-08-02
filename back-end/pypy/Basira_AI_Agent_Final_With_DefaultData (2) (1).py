import gradio as gr
import pandas as pd

# تحميل البيانات الافتراضية من الملف
default_data = pd.read_csv("Basira_Default_Companies_Data (2).csv")

# تابع تحليل الجدارة الائتمانية
def analyze_company(company_name):
    row = default_data[default_data["Company"] == company_name].iloc[0]
    capacity = row["Capacity"]
    willingness = row["Willingness"]
    stability = row["Stability"]
    # حساب النتيجة النهائية (بشكل مبسط)
    total_score = round((capacity + willingness + stability) / 3, 2)
    # تحديد القرار بناءً على النتيجة
    if total_score >= 0.75:
        decision = "مقبول"
    elif total_score >= 0.5:
        decision = "إحالة"
    else:
        decision = "مرفوض"
    # شرح تفصيلي
    explanation = "تم اتخاذ القرار بناءً على تقييم شامل."
    reason_capacity = f"({capacity}) (Capacity: صافي الربح والتدفق النقدي)"
    reason_willingness = f"({willingness}) (Willingness: سجل السداد)"
    reason_stability = f"({stability}) (Stability: الاستقرار وسنوات العمل)"
    full_reason = f"{reason_capacity}\n{reason_willingness}\n{reason_stability}"
    return capacity, willingness, stability, total_score, decision, explanation, full_reason
# إنشاء واجهة Gradio
with gr.Blocks() as demo:
    gr.Markdown("## 🧠 Basira Creditworthiness Agent")

    company_list = default_data["Company"].tolist()
    selected_company = gr.Dropdown(choices=company_list, label="اختر اسم الشركة")

    cap = gr.Textbox(label="Capacity")
    will = gr.Textbox(label="Willingness")
    stab = gr.Textbox(label="Stability")
    score = gr.Textbox(label="Total Score")
    decision = gr.Textbox(label="القرار النهائي")
    explanation = gr.Textbox(label="الشرح")
    reason_detail = gr.Textbox(label="شرح تفصيلي")

    run_button = gr.Button("تشغيل التحليل")

    run_button.click(fn=analyze_company, 
                     inputs=[selected_company], 
                     outputs=[cap, will, stab, score, decision, explanation, reason_detail])
demo.launch()

