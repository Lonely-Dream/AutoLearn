using OpenQA.Selenium.Chrome;

namespace AutoLearn
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            button__start = new Button();
            listBox1 = new ListBox();
            groupBox1 = new GroupBox();
            numericUpDown1 = new NumericUpDown();
            checkBox1 = new CheckBox();
            checkBoxAutoEvaluate = new CheckBox();
            label2 = new Label();
            textBoxPassword = new TextBox();
            label1 = new Label();
            textBoxUsername = new TextBox();
            groupBox3 = new GroupBox();
            cb_getWay_rm = new CheckBox();
            cb_getWay_plan = new CheckBox();
            cb_getWay_self = new CheckBox();
            cb_sortName_limitime = new CheckBox();
            cb_sortName_tasktime = new CheckBox();
            cb_courseStatus_has_ended = new CheckBox();
            cb_courseStatus_study = new CheckBox();
            cb_courseStatus_not_started = new CheckBox();
            cb_sortName_studytime = new CheckBox();
            cb_courseStatus_all = new CheckBox();
            label10 = new Label();
            cb_stepToGetScore_exam = new CheckBox();
            cb_stepToGetScore_evaluate = new CheckBox();
            cb_stepToGetScore_study = new CheckBox();
            cb_stepToGetScore_all = new CheckBox();
            label9 = new Label();
            cb_courseStudyType_self = new CheckBox();
            cb_courseStudyType_selective = new CheckBox();
            cb_courseStudyType_must = new CheckBox();
            cb_courseStudyType_all = new CheckBox();
            label8 = new Label();
            label7 = new Label();
            cb_getWay_all = new CheckBox();
            label11 = new Label();
            button2 = new Button();
            groupBox2 = new GroupBox();
            buttonLearnGXK = new Button();
            label3 = new Label();
            textBoxPassword2 = new TextBox();
            label4 = new Label();
            textBoxUsername2 = new TextBox();
            dateTimePicker1 = new DateTimePicker();
            dateTimePicker2 = new DateTimePicker();
            label5 = new Label();
            label6 = new Label();
            button3 = new Button();
            textBoxServerURL = new TextBox();
            button4 = new Button();
            tabControl1 = new TabControl();
            tabPage1 = new TabPage();
            tabPage2 = new TabPage();
            groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)numericUpDown1).BeginInit();
            groupBox3.SuspendLayout();
            groupBox2.SuspendLayout();
            tabControl1.SuspendLayout();
            tabPage1.SuspendLayout();
            tabPage2.SuspendLayout();
            SuspendLayout();
            // 
            // button__start
            // 
            button__start.Location = new Point(4, 6);
            button__start.Name = "button__start";
            button__start.Size = new Size(80, 28);
            button__start.TabIndex = 0;
            button__start.Text = "启动";
            button__start.UseVisualStyleBackColor = true;
            button__start.Click += button1_Click;
            // 
            // listBox1
            // 
            listBox1.FormattingEnabled = true;
            listBox1.HorizontalScrollbar = true;
            listBox1.ItemHeight = 17;
            listBox1.Location = new Point(8, 220);
            listBox1.Name = "listBox1";
            listBox1.ScrollAlwaysVisible = true;
            listBox1.Size = new Size(800, 225);
            listBox1.TabIndex = 2;
            // 
            // groupBox1
            // 
            groupBox1.Controls.Add(numericUpDown1);
            groupBox1.Controls.Add(checkBox1);
            groupBox1.Controls.Add(checkBoxAutoEvaluate);
            groupBox1.Controls.Add(label2);
            groupBox1.Controls.Add(textBoxPassword);
            groupBox1.Controls.Add(label1);
            groupBox1.Controls.Add(textBoxUsername);
            groupBox1.Location = new Point(518, 6);
            groupBox1.Name = "groupBox1";
            groupBox1.Size = new Size(268, 140);
            groupBox1.TabIndex = 3;
            groupBox1.TabStop = false;
            groupBox1.Text = "专业课设置";
            // 
            // numericUpDown1
            // 
            numericUpDown1.Enabled = false;
            numericUpDown1.Location = new Point(208, 53);
            numericUpDown1.Name = "numericUpDown1";
            numericUpDown1.ReadOnly = true;
            numericUpDown1.Size = new Size(43, 23);
            numericUpDown1.TabIndex = 6;
            numericUpDown1.Value = new decimal(new int[] { 1, 0, 0, 0 });
            numericUpDown1.ValueChanged += numericUpDown1_ValueChanged;
            // 
            // checkBox1
            // 
            checkBox1.AutoSize = true;
            checkBox1.Location = new Point(138, 54);
            checkBox1.Name = "checkBox1";
            checkBox1.Size = new Size(75, 21);
            checkBox1.TabIndex = 7;
            checkBox1.Text = "是否倍速";
            checkBox1.UseVisualStyleBackColor = true;
            checkBox1.CheckedChanged += checkBox1_CheckedChanged;
            // 
            // checkBoxAutoEvaluate
            // 
            checkBoxAutoEvaluate.AutoSize = true;
            checkBoxAutoEvaluate.Checked = true;
            checkBoxAutoEvaluate.CheckState = CheckState.Checked;
            checkBoxAutoEvaluate.Location = new Point(138, 25);
            checkBoxAutoEvaluate.Name = "checkBoxAutoEvaluate";
            checkBoxAutoEvaluate.Size = new Size(99, 21);
            checkBoxAutoEvaluate.TabIndex = 4;
            checkBoxAutoEvaluate.Text = "是否自动评价";
            checkBoxAutoEvaluate.UseVisualStyleBackColor = true;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(1, 56);
            label2.Name = "label2";
            label2.Size = new Size(35, 17);
            label2.TabIndex = 3;
            label2.Text = "密码:";
            // 
            // textBoxPassword
            // 
            textBoxPassword.Location = new Point(36, 53);
            textBoxPassword.Name = "textBoxPassword";
            textBoxPassword.PasswordChar = '*';
            textBoxPassword.Size = new Size(100, 23);
            textBoxPassword.TabIndex = 2;
            textBoxPassword.TextChanged += textBoxPassword_TextChanged;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(1, 27);
            label1.Name = "label1";
            label1.Size = new Size(35, 17);
            label1.TabIndex = 1;
            label1.Text = "账号:";
            // 
            // textBoxUsername
            // 
            textBoxUsername.Location = new Point(36, 24);
            textBoxUsername.Name = "textBoxUsername";
            textBoxUsername.Size = new Size(100, 23);
            textBoxUsername.TabIndex = 0;
            textBoxUsername.TextChanged += textBoxUsername_TextChanged;
            // 
            // groupBox3
            // 
            groupBox3.Controls.Add(cb_getWay_rm);
            groupBox3.Controls.Add(cb_getWay_plan);
            groupBox3.Controls.Add(cb_getWay_self);
            groupBox3.Controls.Add(cb_sortName_limitime);
            groupBox3.Controls.Add(cb_sortName_tasktime);
            groupBox3.Controls.Add(cb_courseStatus_has_ended);
            groupBox3.Controls.Add(cb_courseStatus_study);
            groupBox3.Controls.Add(cb_courseStatus_not_started);
            groupBox3.Controls.Add(cb_sortName_studytime);
            groupBox3.Controls.Add(cb_courseStatus_all);
            groupBox3.Controls.Add(label10);
            groupBox3.Controls.Add(cb_stepToGetScore_exam);
            groupBox3.Controls.Add(cb_stepToGetScore_evaluate);
            groupBox3.Controls.Add(cb_stepToGetScore_study);
            groupBox3.Controls.Add(cb_stepToGetScore_all);
            groupBox3.Controls.Add(label9);
            groupBox3.Controls.Add(cb_courseStudyType_self);
            groupBox3.Controls.Add(cb_courseStudyType_selective);
            groupBox3.Controls.Add(cb_courseStudyType_must);
            groupBox3.Controls.Add(cb_courseStudyType_all);
            groupBox3.Controls.Add(label8);
            groupBox3.Controls.Add(label7);
            groupBox3.Controls.Add(cb_getWay_all);
            groupBox3.Controls.Add(label11);
            groupBox3.Location = new Point(218, 6);
            groupBox3.Name = "groupBox3";
            groupBox3.Size = new Size(296, 140);
            groupBox3.TabIndex = 9;
            groupBox3.TabStop = false;
            groupBox3.Text = "课程类型";
            // 
            // cb_getWay_rm
            // 
            cb_getWay_rm.AutoSize = true;
            cb_getWay_rm.Location = new Point(219, 19);
            cb_getWay_rm.Name = "cb_getWay_rm";
            cb_getWay_rm.Size = new Size(75, 21);
            cb_getWay_rm.TabIndex = 3;
            cb_getWay_rm.Text = "学习地图";
            cb_getWay_rm.UseVisualStyleBackColor = true;
            // 
            // cb_getWay_plan
            // 
            cb_getWay_plan.AutoSize = true;
            cb_getWay_plan.Location = new Point(161, 19);
            cb_getWay_plan.Name = "cb_getWay_plan";
            cb_getWay_plan.Size = new Size(51, 21);
            cb_getWay_plan.TabIndex = 2;
            cb_getWay_plan.Text = "安排";
            cb_getWay_plan.UseVisualStyleBackColor = true;
            // 
            // cb_getWay_self
            // 
            cb_getWay_self.AutoSize = true;
            cb_getWay_self.Location = new Point(103, 19);
            cb_getWay_self.Name = "cb_getWay_self";
            cb_getWay_self.Size = new Size(51, 21);
            cb_getWay_self.TabIndex = 1;
            cb_getWay_self.Text = "自选";
            cb_getWay_self.UseVisualStyleBackColor = true;
            // 
            // cb_sortName_limitime
            // 
            cb_sortName_limitime.AutoSize = true;
            cb_sortName_limitime.Location = new Point(161, 111);
            cb_sortName_limitime.Name = "cb_sortName_limitime";
            cb_sortName_limitime.Size = new Size(51, 21);
            cb_sortName_limitime.TabIndex = 23;
            cb_sortName_limitime.Text = "到期";
            cb_sortName_limitime.UseVisualStyleBackColor = true;
            // 
            // cb_sortName_tasktime
            // 
            cb_sortName_tasktime.AutoSize = true;
            cb_sortName_tasktime.Location = new Point(103, 111);
            cb_sortName_tasktime.Name = "cb_sortName_tasktime";
            cb_sortName_tasktime.Size = new Size(51, 21);
            cb_sortName_tasktime.TabIndex = 22;
            cb_sortName_tasktime.Text = "分配";
            cb_sortName_tasktime.UseVisualStyleBackColor = true;
            // 
            // cb_courseStatus_has_ended
            // 
            cb_courseStatus_has_ended.AutoSize = true;
            cb_courseStatus_has_ended.Location = new Point(219, 88);
            cb_courseStatus_has_ended.Name = "cb_courseStatus_has_ended";
            cb_courseStatus_has_ended.Size = new Size(63, 21);
            cb_courseStatus_has_ended.TabIndex = 21;
            cb_courseStatus_has_ended.Text = "已完成";
            cb_courseStatus_has_ended.UseVisualStyleBackColor = true;
            // 
            // cb_courseStatus_study
            // 
            cb_courseStatus_study.AutoSize = true;
            cb_courseStatus_study.Checked = true;
            cb_courseStatus_study.CheckState = CheckState.Checked;
            cb_courseStatus_study.Location = new Point(161, 88);
            cb_courseStatus_study.Name = "cb_courseStatus_study";
            cb_courseStatus_study.Size = new Size(63, 21);
            cb_courseStatus_study.TabIndex = 20;
            cb_courseStatus_study.Text = "进行中";
            cb_courseStatus_study.UseVisualStyleBackColor = true;
            // 
            // cb_courseStatus_not_started
            // 
            cb_courseStatus_not_started.AutoSize = true;
            cb_courseStatus_not_started.Checked = true;
            cb_courseStatus_not_started.CheckState = CheckState.Checked;
            cb_courseStatus_not_started.Location = new Point(103, 88);
            cb_courseStatus_not_started.Name = "cb_courseStatus_not_started";
            cb_courseStatus_not_started.Size = new Size(63, 21);
            cb_courseStatus_not_started.TabIndex = 19;
            cb_courseStatus_not_started.Text = "未学习";
            cb_courseStatus_not_started.UseVisualStyleBackColor = true;
            // 
            // cb_sortName_studytime
            // 
            cb_sortName_studytime.AutoSize = true;
            cb_sortName_studytime.Checked = true;
            cb_sortName_studytime.CheckState = CheckState.Checked;
            cb_sortName_studytime.Location = new Point(57, 111);
            cb_sortName_studytime.Name = "cb_sortName_studytime";
            cb_sortName_studytime.Size = new Size(51, 21);
            cb_sortName_studytime.TabIndex = 17;
            cb_sortName_studytime.Text = "学习";
            cb_sortName_studytime.UseVisualStyleBackColor = true;
            // 
            // cb_courseStatus_all
            // 
            cb_courseStatus_all.AutoSize = true;
            cb_courseStatus_all.Location = new Point(57, 88);
            cb_courseStatus_all.Name = "cb_courseStatus_all";
            cb_courseStatus_all.Size = new Size(51, 21);
            cb_courseStatus_all.TabIndex = 16;
            cb_courseStatus_all.Text = "全部";
            cb_courseStatus_all.UseVisualStyleBackColor = true;
            // 
            // label10
            // 
            label10.AutoSize = true;
            label10.Location = new Point(1, 90);
            label10.Name = "label10";
            label10.Size = new Size(56, 17);
            label10.TabIndex = 15;
            label10.Text = "学习状态";
            // 
            // cb_stepToGetScore_exam
            // 
            cb_stepToGetScore_exam.AutoSize = true;
            cb_stepToGetScore_exam.Location = new Point(219, 65);
            cb_stepToGetScore_exam.Name = "cb_stepToGetScore_exam";
            cb_stepToGetScore_exam.Size = new Size(51, 21);
            cb_stepToGetScore_exam.TabIndex = 14;
            cb_stepToGetScore_exam.Text = "测试";
            cb_stepToGetScore_exam.UseVisualStyleBackColor = true;
            // 
            // cb_stepToGetScore_evaluate
            // 
            cb_stepToGetScore_evaluate.AutoSize = true;
            cb_stepToGetScore_evaluate.Location = new Point(161, 65);
            cb_stepToGetScore_evaluate.Name = "cb_stepToGetScore_evaluate";
            cb_stepToGetScore_evaluate.Size = new Size(51, 21);
            cb_stepToGetScore_evaluate.TabIndex = 13;
            cb_stepToGetScore_evaluate.Text = "评估";
            cb_stepToGetScore_evaluate.UseVisualStyleBackColor = true;
            // 
            // cb_stepToGetScore_study
            // 
            cb_stepToGetScore_study.AutoSize = true;
            cb_stepToGetScore_study.Location = new Point(103, 65);
            cb_stepToGetScore_study.Name = "cb_stepToGetScore_study";
            cb_stepToGetScore_study.Size = new Size(51, 21);
            cb_stepToGetScore_study.TabIndex = 12;
            cb_stepToGetScore_study.Text = "学习";
            cb_stepToGetScore_study.UseVisualStyleBackColor = true;
            // 
            // cb_stepToGetScore_all
            // 
            cb_stepToGetScore_all.AutoSize = true;
            cb_stepToGetScore_all.Checked = true;
            cb_stepToGetScore_all.CheckState = CheckState.Checked;
            cb_stepToGetScore_all.Location = new Point(57, 65);
            cb_stepToGetScore_all.Name = "cb_stepToGetScore_all";
            cb_stepToGetScore_all.Size = new Size(51, 21);
            cb_stepToGetScore_all.TabIndex = 11;
            cb_stepToGetScore_all.Text = "全部";
            cb_stepToGetScore_all.UseVisualStyleBackColor = true;
            // 
            // label9
            // 
            label9.AutoSize = true;
            label9.Location = new Point(1, 67);
            label9.Name = "label9";
            label9.Size = new Size(56, 17);
            label9.TabIndex = 10;
            label9.Text = "结业条件";
            // 
            // cb_courseStudyType_self
            // 
            cb_courseStudyType_self.AutoSize = true;
            cb_courseStudyType_self.Location = new Point(219, 42);
            cb_courseStudyType_self.Name = "cb_courseStudyType_self";
            cb_courseStudyType_self.Size = new Size(51, 21);
            cb_courseStudyType_self.TabIndex = 9;
            cb_courseStudyType_self.Text = "任选";
            cb_courseStudyType_self.UseVisualStyleBackColor = true;
            // 
            // cb_courseStudyType_selective
            // 
            cb_courseStudyType_selective.AutoSize = true;
            cb_courseStudyType_selective.Location = new Point(161, 42);
            cb_courseStudyType_selective.Name = "cb_courseStudyType_selective";
            cb_courseStudyType_selective.Size = new Size(51, 21);
            cb_courseStudyType_selective.TabIndex = 8;
            cb_courseStudyType_selective.Text = "选修";
            cb_courseStudyType_selective.UseVisualStyleBackColor = true;
            // 
            // cb_courseStudyType_must
            // 
            cb_courseStudyType_must.AutoSize = true;
            cb_courseStudyType_must.Checked = true;
            cb_courseStudyType_must.CheckState = CheckState.Checked;
            cb_courseStudyType_must.Location = new Point(103, 42);
            cb_courseStudyType_must.Name = "cb_courseStudyType_must";
            cb_courseStudyType_must.Size = new Size(51, 21);
            cb_courseStudyType_must.TabIndex = 7;
            cb_courseStudyType_must.Text = "必修";
            cb_courseStudyType_must.UseVisualStyleBackColor = true;
            // 
            // cb_courseStudyType_all
            // 
            cb_courseStudyType_all.AutoSize = true;
            cb_courseStudyType_all.Location = new Point(57, 42);
            cb_courseStudyType_all.Name = "cb_courseStudyType_all";
            cb_courseStudyType_all.Size = new Size(51, 21);
            cb_courseStudyType_all.TabIndex = 6;
            cb_courseStudyType_all.Text = "全部";
            cb_courseStudyType_all.UseVisualStyleBackColor = true;
            // 
            // label8
            // 
            label8.AutoSize = true;
            label8.Location = new Point(1, 44);
            label8.Name = "label8";
            label8.Size = new Size(56, 17);
            label8.TabIndex = 5;
            label8.Text = "课程类型";
            // 
            // label7
            // 
            label7.AutoSize = true;
            label7.Location = new Point(1, 21);
            label7.Name = "label7";
            label7.Size = new Size(56, 17);
            label7.TabIndex = 0;
            label7.Text = "课程来源";
            // 
            // cb_getWay_all
            // 
            cb_getWay_all.AutoSize = true;
            cb_getWay_all.Checked = true;
            cb_getWay_all.CheckState = CheckState.Checked;
            cb_getWay_all.Location = new Point(57, 19);
            cb_getWay_all.Margin = new Padding(0);
            cb_getWay_all.Name = "cb_getWay_all";
            cb_getWay_all.Size = new Size(51, 21);
            cb_getWay_all.TabIndex = 4;
            cb_getWay_all.Text = "全部";
            cb_getWay_all.UseVisualStyleBackColor = true;
            // 
            // label11
            // 
            label11.AutoSize = true;
            label11.Location = new Point(1, 113);
            label11.Name = "label11";
            label11.Size = new Size(56, 17);
            label11.TabIndex = 18;
            label11.Text = "排序方式";
            // 
            // button2
            // 
            button2.Location = new Point(89, 6);
            button2.Name = "button2";
            button2.Size = new Size(80, 28);
            button2.TabIndex = 4;
            button2.Text = "开始学习";
            button2.UseVisualStyleBackColor = true;
            button2.Click += button2_Click;
            // 
            // groupBox2
            // 
            groupBox2.Controls.Add(buttonLearnGXK);
            groupBox2.Controls.Add(label3);
            groupBox2.Controls.Add(textBoxPassword2);
            groupBox2.Controls.Add(label4);
            groupBox2.Controls.Add(textBoxUsername2);
            groupBox2.Location = new Point(6, 6);
            groupBox2.Name = "groupBox2";
            groupBox2.Size = new Size(288, 105);
            groupBox2.TabIndex = 5;
            groupBox2.TabStop = false;
            groupBox2.Text = "公需课设置";
            // 
            // buttonLearnGXK
            // 
            buttonLearnGXK.Location = new Point(196, 54);
            buttonLearnGXK.Name = "buttonLearnGXK";
            buttonLearnGXK.Size = new Size(86, 23);
            buttonLearnGXK.TabIndex = 4;
            buttonLearnGXK.Text = "学习公需课";
            buttonLearnGXK.UseVisualStyleBackColor = true;
            buttonLearnGXK.Click += buttonLearnGXK_Click;
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Location = new Point(6, 56);
            label3.Name = "label3";
            label3.Size = new Size(44, 17);
            label3.TabIndex = 3;
            label3.Text = "密码：";
            // 
            // textBoxPassword2
            // 
            textBoxPassword2.Location = new Point(56, 53);
            textBoxPassword2.Name = "textBoxPassword2";
            textBoxPassword2.PasswordChar = '*';
            textBoxPassword2.Size = new Size(100, 23);
            textBoxPassword2.TabIndex = 2;
            textBoxPassword2.TextChanged += textBoxPassword2_TextChanged;
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Location = new Point(6, 27);
            label4.Name = "label4";
            label4.Size = new Size(44, 17);
            label4.TabIndex = 1;
            label4.Text = "账号：";
            // 
            // textBoxUsername2
            // 
            textBoxUsername2.Location = new Point(56, 24);
            textBoxUsername2.Name = "textBoxUsername2";
            textBoxUsername2.Size = new Size(226, 23);
            textBoxUsername2.TabIndex = 0;
            textBoxUsername2.TextChanged += textBoxUsername2_TextChanged;
            // 
            // dateTimePicker1
            // 
            dateTimePicker1.CustomFormat = "yyyy-MM-dd";
            dateTimePicker1.Format = DateTimePickerFormat.Custom;
            dateTimePicker1.Location = new Point(4, 40);
            dateTimePicker1.Name = "dateTimePicker1";
            dateTimePicker1.Size = new Size(104, 23);
            dateTimePicker1.TabIndex = 6;
            dateTimePicker1.Value = new DateTime(2022, 9, 15, 0, 0, 0, 0);
            dateTimePicker1.ValueChanged += dateTimePicker1_ValueChanged;
            // 
            // dateTimePicker2
            // 
            dateTimePicker2.CustomFormat = "yyyy-MM-dd";
            dateTimePicker2.Format = DateTimePickerFormat.Custom;
            dateTimePicker2.Location = new Point(111, 40);
            dateTimePicker2.Name = "dateTimePicker2";
            dateTimePicker2.Size = new Size(104, 23);
            dateTimePicker2.TabIndex = 7;
            dateTimePicker2.Value = new DateTime(2022, 9, 30, 15, 20, 43, 0);
            dateTimePicker2.ValueChanged += dateTimePicker2_ValueChanged;
            // 
            // label5
            // 
            label5.AutoSize = true;
            label5.Location = new Point(89, 69);
            label5.Name = "label5";
            label5.Size = new Size(44, 17);
            label5.TabIndex = 8;
            label5.Text = "学时：";
            // 
            // label6
            // 
            label6.AutoSize = true;
            label6.Location = new Point(89, 92);
            label6.Name = "label6";
            label6.Size = new Size(44, 17);
            label6.TabIndex = 9;
            label6.Text = "学分：";
            // 
            // button3
            // 
            button3.Location = new Point(4, 69);
            button3.Name = "button3";
            button3.Size = new Size(80, 28);
            button3.TabIndex = 10;
            button3.Text = "查询";
            button3.UseVisualStyleBackColor = true;
            button3.Click += button3_Click;
            // 
            // textBoxServerURL
            // 
            textBoxServerURL.Location = new Point(533, 192);
            textBoxServerURL.Name = "textBoxServerURL";
            textBoxServerURL.Size = new Size(194, 23);
            textBoxServerURL.TabIndex = 11;
            textBoxServerURL.Text = "http://172.10.50.229:12345";
            // 
            // button4
            // 
            button4.Location = new Point(733, 192);
            button4.Name = "button4";
            button4.Size = new Size(75, 23);
            button4.TabIndex = 12;
            button4.Text = "检查更新";
            button4.UseVisualStyleBackColor = true;
            button4.Click += button4_Click;
            // 
            // tabControl1
            // 
            tabControl1.Controls.Add(tabPage1);
            tabControl1.Controls.Add(tabPage2);
            tabControl1.Location = new Point(8, 8);
            tabControl1.Name = "tabControl1";
            tabControl1.SelectedIndex = 0;
            tabControl1.Size = new Size(800, 180);
            tabControl1.TabIndex = 13;
            // 
            // tabPage1
            // 
            tabPage1.BackColor = SystemColors.Control;
            tabPage1.Controls.Add(groupBox3);
            tabPage1.Controls.Add(button__start);
            tabPage1.Controls.Add(button2);
            tabPage1.Controls.Add(dateTimePicker1);
            tabPage1.Controls.Add(groupBox1);
            tabPage1.Controls.Add(label6);
            tabPage1.Controls.Add(button3);
            tabPage1.Controls.Add(label5);
            tabPage1.Controls.Add(dateTimePicker2);
            tabPage1.Location = new Point(4, 26);
            tabPage1.Name = "tabPage1";
            tabPage1.Padding = new Padding(3);
            tabPage1.Size = new Size(792, 150);
            tabPage1.TabIndex = 0;
            tabPage1.Text = "专业课";
            // 
            // tabPage2
            // 
            tabPage2.BackColor = SystemColors.Control;
            tabPage2.Controls.Add(groupBox2);
            tabPage2.Location = new Point(4, 26);
            tabPage2.Name = "tabPage2";
            tabPage2.Padding = new Padding(3);
            tabPage2.Size = new Size(792, 150);
            tabPage2.TabIndex = 1;
            tabPage2.Text = "公需课";
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 17F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(814, 451);
            Controls.Add(tabControl1);
            Controls.Add(button4);
            Controls.Add(textBoxServerURL);
            Controls.Add(listBox1);
            Icon = (Icon)resources.GetObject("$this.Icon");
            Name = "Form1";
            Text = "AutoLearn";
            FormClosing += Form1_Closing;
            Shown += Form1_Shown;
            groupBox1.ResumeLayout(false);
            groupBox1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)numericUpDown1).EndInit();
            groupBox3.ResumeLayout(false);
            groupBox3.PerformLayout();
            groupBox2.ResumeLayout(false);
            groupBox2.PerformLayout();
            tabControl1.ResumeLayout(false);
            tabPage1.ResumeLayout(false);
            tabPage1.PerformLayout();
            tabPage2.ResumeLayout(false);
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button button__start;
        private ListBox listBox1;
        private GroupBox groupBox1;
        private Label label2;
        private TextBox textBoxPassword;
        private Label label1;
        private TextBox textBoxUsername;
        private Button button2;
        private CheckBox checkBoxAutoEvaluate;
        private GroupBox groupBox2;
        private Button buttonLearnGXK;
        private Label label3;
        private TextBox textBoxPassword2;
        private Label label4;
        private TextBox textBoxUsername2;
        private DateTimePicker dateTimePicker1;
        private DateTimePicker dateTimePicker2;
        private Label label5;
        private Label label6;
        private Button button3;
        private CheckBox checkBox1;
        private NumericUpDown numericUpDown1;
        private TextBox textBoxServerURL;
        private Button button4;
        private GroupBox groupBox3;
        private Label label7;
        private CheckBox cb_courseStudyType_selective;
        private CheckBox cb_courseStudyType_must;
        private CheckBox cb_courseStudyType_all;
        private Label label8;
        private CheckBox cb_getWay_all;
        private CheckBox cb_getWay_rm;
        private CheckBox cb_getWay_plan;
        private CheckBox cb_getWay_self;
        private Label label10;
        private CheckBox cb_stepToGetScore_exam;
        private CheckBox cb_stepToGetScore_evaluate;
        private CheckBox cb_stepToGetScore_study;
        private CheckBox cb_stepToGetScore_all;
        private Label label9;
        private CheckBox cb_courseStudyType_self;
        private CheckBox cb_sortName_studytime;
        private CheckBox cb_courseStatus_all;
        private CheckBox cb_sortName_limitime;
        private CheckBox cb_sortName_tasktime;
        private CheckBox cb_courseStatus_has_ended;
        private CheckBox cb_courseStatus_study;
        private CheckBox cb_courseStatus_not_started;
        private Label label11;
        private TabControl tabControl1;
        private TabPage tabPage1;
        private TabPage tabPage2;
    }
}