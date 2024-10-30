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
            cb_cf_43 = new CheckBox();
            cb_cf_03 = new CheckBox();
            cb_cf_02 = new CheckBox();
            cb_cf_01 = new CheckBox();
            cb_cf_42 = new CheckBox();
            cb_cf_41 = new CheckBox();
            cb_cf_33 = new CheckBox();
            cb_cf_32 = new CheckBox();
            cb_cf_31 = new CheckBox();
            cb_cf_40 = new CheckBox();
            cb_cf_30 = new CheckBox();
            label10 = new Label();
            cb_cf_23 = new CheckBox();
            cb_cf_22 = new CheckBox();
            cb_cf_21 = new CheckBox();
            cb_cf_20 = new CheckBox();
            label9 = new Label();
            cb_cf_13 = new CheckBox();
            cb_cf_12 = new CheckBox();
            cb_cf_11 = new CheckBox();
            cb_cf_10 = new CheckBox();
            label8 = new Label();
            label7 = new Label();
            cb_cf_00 = new CheckBox();
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
            groupBox3.Controls.Add(cb_cf_43);
            groupBox3.Controls.Add(cb_cf_03);
            groupBox3.Controls.Add(cb_cf_02);
            groupBox3.Controls.Add(cb_cf_01);
            groupBox3.Controls.Add(cb_cf_42);
            groupBox3.Controls.Add(cb_cf_41);
            groupBox3.Controls.Add(cb_cf_33);
            groupBox3.Controls.Add(cb_cf_32);
            groupBox3.Controls.Add(cb_cf_31);
            groupBox3.Controls.Add(cb_cf_40);
            groupBox3.Controls.Add(cb_cf_30);
            groupBox3.Controls.Add(label10);
            groupBox3.Controls.Add(cb_cf_23);
            groupBox3.Controls.Add(cb_cf_22);
            groupBox3.Controls.Add(cb_cf_21);
            groupBox3.Controls.Add(cb_cf_20);
            groupBox3.Controls.Add(label9);
            groupBox3.Controls.Add(cb_cf_13);
            groupBox3.Controls.Add(cb_cf_12);
            groupBox3.Controls.Add(cb_cf_11);
            groupBox3.Controls.Add(cb_cf_10);
            groupBox3.Controls.Add(label8);
            groupBox3.Controls.Add(label7);
            groupBox3.Controls.Add(cb_cf_00);
            groupBox3.Controls.Add(label11);
            groupBox3.Location = new Point(218, 6);
            groupBox3.Name = "groupBox3";
            groupBox3.Size = new Size(296, 140);
            groupBox3.TabIndex = 9;
            groupBox3.TabStop = false;
            groupBox3.Text = "课程类型";
            // 
            // cb_cf_43
            // 
            cb_cf_43.AutoCheck = false;
            cb_cf_43.AutoSize = true;
            cb_cf_43.Location = new Point(219, 111);
            cb_cf_43.Name = "cb_cf_43";
            cb_cf_43.Size = new Size(51, 21);
            cb_cf_43.TabIndex = 24;
            cb_cf_43.Text = "到期";
            cb_cf_43.UseVisualStyleBackColor = true;
            cb_cf_43.Visible = false;
            cb_cf_43.MouseClick += cb_cf_4x_MouseClick;
            // 
            // cb_cf_03
            // 
            cb_cf_03.AutoSize = true;
            cb_cf_03.Location = new Point(219, 19);
            cb_cf_03.Name = "cb_cf_03";
            cb_cf_03.Size = new Size(75, 21);
            cb_cf_03.TabIndex = 3;
            cb_cf_03.Text = "学习地图";
            cb_cf_03.UseVisualStyleBackColor = true;
            cb_cf_03.CheckedChanged += cb_cf_CheckedChanged;
            // 
            // cb_cf_02
            // 
            cb_cf_02.AutoSize = true;
            cb_cf_02.Location = new Point(161, 19);
            cb_cf_02.Name = "cb_cf_02";
            cb_cf_02.Size = new Size(51, 21);
            cb_cf_02.TabIndex = 2;
            cb_cf_02.Text = "安排";
            cb_cf_02.UseVisualStyleBackColor = true;
            cb_cf_02.CheckedChanged += cb_cf_CheckedChanged;
            // 
            // cb_cf_01
            // 
            cb_cf_01.AutoSize = true;
            cb_cf_01.Location = new Point(103, 19);
            cb_cf_01.Name = "cb_cf_01";
            cb_cf_01.Size = new Size(51, 21);
            cb_cf_01.TabIndex = 1;
            cb_cf_01.Text = "自选";
            cb_cf_01.UseVisualStyleBackColor = true;
            cb_cf_01.CheckedChanged += cb_cf_CheckedChanged;
            // 
            // cb_cf_42
            // 
            cb_cf_42.AutoCheck = false;
            cb_cf_42.AutoSize = true;
            cb_cf_42.Location = new Point(161, 111);
            cb_cf_42.Name = "cb_cf_42";
            cb_cf_42.Size = new Size(51, 21);
            cb_cf_42.TabIndex = 23;
            cb_cf_42.Text = "到期";
            cb_cf_42.UseVisualStyleBackColor = true;
            cb_cf_42.MouseClick += cb_cf_4x_MouseClick;
            // 
            // cb_cf_41
            // 
            cb_cf_41.AutoCheck = false;
            cb_cf_41.AutoSize = true;
            cb_cf_41.Location = new Point(103, 111);
            cb_cf_41.Name = "cb_cf_41";
            cb_cf_41.Size = new Size(51, 21);
            cb_cf_41.TabIndex = 22;
            cb_cf_41.Text = "分配";
            cb_cf_41.UseVisualStyleBackColor = true;
            cb_cf_41.MouseClick += cb_cf_4x_MouseClick;
            // 
            // cb_cf_33
            // 
            cb_cf_33.AutoSize = true;
            cb_cf_33.Location = new Point(219, 88);
            cb_cf_33.Name = "cb_cf_33";
            cb_cf_33.Size = new Size(63, 21);
            cb_cf_33.TabIndex = 21;
            cb_cf_33.Text = "已完成";
            cb_cf_33.UseVisualStyleBackColor = true;
            cb_cf_33.CheckedChanged += cb_cf_CheckedChanged;
            // 
            // cb_cf_32
            // 
            cb_cf_32.AutoSize = true;
            cb_cf_32.Checked = true;
            cb_cf_32.CheckState = CheckState.Checked;
            cb_cf_32.Location = new Point(161, 88);
            cb_cf_32.Name = "cb_cf_32";
            cb_cf_32.Size = new Size(63, 21);
            cb_cf_32.TabIndex = 20;
            cb_cf_32.Text = "进行中";
            cb_cf_32.UseVisualStyleBackColor = true;
            cb_cf_32.CheckedChanged += cb_cf_CheckedChanged;
            // 
            // cb_cf_31
            // 
            cb_cf_31.AutoSize = true;
            cb_cf_31.Checked = true;
            cb_cf_31.CheckState = CheckState.Checked;
            cb_cf_31.Location = new Point(103, 88);
            cb_cf_31.Name = "cb_cf_31";
            cb_cf_31.Size = new Size(63, 21);
            cb_cf_31.TabIndex = 19;
            cb_cf_31.Text = "未学习";
            cb_cf_31.UseVisualStyleBackColor = true;
            cb_cf_31.CheckedChanged += cb_cf_CheckedChanged;
            // 
            // cb_cf_40
            // 
            cb_cf_40.AutoCheck = false;
            cb_cf_40.AutoSize = true;
            cb_cf_40.Checked = true;
            cb_cf_40.CheckState = CheckState.Checked;
            cb_cf_40.Location = new Point(57, 111);
            cb_cf_40.Name = "cb_cf_40";
            cb_cf_40.Size = new Size(51, 21);
            cb_cf_40.TabIndex = 17;
            cb_cf_40.Text = "学习";
            cb_cf_40.UseVisualStyleBackColor = true;
            cb_cf_40.MouseClick += cb_cf_4x_MouseClick;
            // 
            // cb_cf_30
            // 
            cb_cf_30.AutoSize = true;
            cb_cf_30.Location = new Point(57, 88);
            cb_cf_30.Name = "cb_cf_30";
            cb_cf_30.Size = new Size(51, 21);
            cb_cf_30.TabIndex = 16;
            cb_cf_30.Text = "全部";
            cb_cf_30.UseVisualStyleBackColor = true;
            cb_cf_30.CheckedChanged += cb_cf_CheckedChanged;
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
            // cb_cf_23
            // 
            cb_cf_23.AutoSize = true;
            cb_cf_23.Location = new Point(219, 65);
            cb_cf_23.Name = "cb_cf_23";
            cb_cf_23.Size = new Size(51, 21);
            cb_cf_23.TabIndex = 14;
            cb_cf_23.Text = "测试";
            cb_cf_23.UseVisualStyleBackColor = true;
            cb_cf_23.CheckedChanged += cb_cf_CheckedChanged;
            // 
            // cb_cf_22
            // 
            cb_cf_22.AutoSize = true;
            cb_cf_22.Location = new Point(161, 65);
            cb_cf_22.Name = "cb_cf_22";
            cb_cf_22.Size = new Size(51, 21);
            cb_cf_22.TabIndex = 13;
            cb_cf_22.Text = "评估";
            cb_cf_22.UseVisualStyleBackColor = true;
            cb_cf_22.CheckedChanged += cb_cf_CheckedChanged;
            // 
            // cb_cf_21
            // 
            cb_cf_21.AutoSize = true;
            cb_cf_21.Location = new Point(103, 65);
            cb_cf_21.Name = "cb_cf_21";
            cb_cf_21.Size = new Size(51, 21);
            cb_cf_21.TabIndex = 12;
            cb_cf_21.Text = "学习";
            cb_cf_21.UseVisualStyleBackColor = true;
            cb_cf_21.CheckedChanged += cb_cf_CheckedChanged;
            // 
            // cb_cf_20
            // 
            cb_cf_20.AutoSize = true;
            cb_cf_20.Checked = true;
            cb_cf_20.CheckState = CheckState.Checked;
            cb_cf_20.Location = new Point(57, 65);
            cb_cf_20.Name = "cb_cf_20";
            cb_cf_20.Size = new Size(51, 21);
            cb_cf_20.TabIndex = 11;
            cb_cf_20.Text = "全部";
            cb_cf_20.UseVisualStyleBackColor = true;
            cb_cf_20.CheckedChanged += cb_cf_CheckedChanged;
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
            // cb_cf_13
            // 
            cb_cf_13.AutoSize = true;
            cb_cf_13.Location = new Point(219, 42);
            cb_cf_13.Name = "cb_cf_13";
            cb_cf_13.Size = new Size(51, 21);
            cb_cf_13.TabIndex = 9;
            cb_cf_13.Text = "任选";
            cb_cf_13.UseVisualStyleBackColor = true;
            cb_cf_13.CheckedChanged += cb_cf_CheckedChanged;
            // 
            // cb_cf_12
            // 
            cb_cf_12.AutoSize = true;
            cb_cf_12.Location = new Point(161, 42);
            cb_cf_12.Name = "cb_cf_12";
            cb_cf_12.Size = new Size(51, 21);
            cb_cf_12.TabIndex = 8;
            cb_cf_12.Text = "选修";
            cb_cf_12.UseVisualStyleBackColor = true;
            cb_cf_12.CheckedChanged += cb_cf_CheckedChanged;
            // 
            // cb_cf_11
            // 
            cb_cf_11.AutoSize = true;
            cb_cf_11.Checked = true;
            cb_cf_11.CheckState = CheckState.Checked;
            cb_cf_11.Location = new Point(103, 42);
            cb_cf_11.Name = "cb_cf_11";
            cb_cf_11.Size = new Size(51, 21);
            cb_cf_11.TabIndex = 7;
            cb_cf_11.Text = "必修";
            cb_cf_11.UseVisualStyleBackColor = true;
            cb_cf_11.CheckedChanged += cb_cf_CheckedChanged;
            // 
            // cb_cf_10
            // 
            cb_cf_10.AutoSize = true;
            cb_cf_10.Location = new Point(57, 42);
            cb_cf_10.Name = "cb_cf_10";
            cb_cf_10.Size = new Size(51, 21);
            cb_cf_10.TabIndex = 6;
            cb_cf_10.Text = "全部";
            cb_cf_10.UseVisualStyleBackColor = true;
            cb_cf_10.CheckedChanged += cb_cf_CheckedChanged;
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
            // cb_cf_00
            // 
            cb_cf_00.AutoSize = true;
            cb_cf_00.Checked = true;
            cb_cf_00.CheckState = CheckState.Checked;
            cb_cf_00.Location = new Point(57, 19);
            cb_cf_00.Margin = new Padding(0);
            cb_cf_00.Name = "cb_cf_00";
            cb_cf_00.Size = new Size(51, 21);
            cb_cf_00.TabIndex = 4;
            cb_cf_00.Text = "全部";
            cb_cf_00.UseVisualStyleBackColor = true;
            cb_cf_00.CheckedChanged += cb_cf_CheckedChanged;
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
            dateTimePicker1.Value = new DateTime(2024, 9, 13, 0, 0, 0, 0);
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
            dateTimePicker2.Value = new DateTime(2025, 9, 13, 0, 0, 0, 0);
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
            TopMost = true;
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
        private CheckBox cb_cf_12;
        private CheckBox cb_cf_11;
        private CheckBox cb_cf_10;
        private Label label8;
        private CheckBox cb_cf_00;
        private CheckBox cb_cf_03;
        private CheckBox cb_cf_02;
        private CheckBox cb_cf_01;
        private Label label10;
        private CheckBox cb_cf_23;
        private CheckBox cb_cf_22;
        private CheckBox cb_cf_21;
        private CheckBox cb_cf_20;
        private Label label9;
        private CheckBox cb_cf_13;
        private CheckBox cb_cf_40;
        private CheckBox cb_cf_30;
        private CheckBox cb_cf_42;
        private CheckBox cb_cf_41;
        private CheckBox cb_cf_33;
        private CheckBox cb_cf_32;
        private CheckBox cb_cf_31;
        private Label label11;
        private TabControl tabControl1;
        private TabPage tabPage1;
        private TabPage tabPage2;
        private CheckBox cb_cf_43;
    }
}